import React, { useState, useCallback, useEffect } from 'react';
import { GraphiQL } from 'graphiql';
import type { Fetcher } from '@graphiql/toolkit';
import 'graphiql/graphiql.min.css';
import { init } from '@getalby/bitcoin-connect-react';
import { Invoice } from '@getalby/lightning-tools';
import parseWWWAuthenticateHeader from "../utils/parseWWWAuthenticateHeader";
import { z } from 'zod';
import { debounce } from 'lodash';
import { ClipLoader } from 'react-spinners';

const GraphQLQuery = z.object({
    title: z.string(),
    query: z.string(),
});

const GraphQLQueries = z.object({
    queries: z.array(GraphQLQuery),
});

type Query = {
    title: string;
    query: string;
};

const GraphQLExplorer: React.FC = () => {
    const [url, setUrl] = useState('https://flask-l-402-data-pol-avec.replit.app/graphql');
    const [credentials, setCredentials] = useState('AgE0aHR0cHM6Ly82NjYzMWQ0Ny1kNjk5LTQyYjUtOGM4ZS03YTI4N2I4Zjg0OWQucmVwbC5jbwJCAADCisWw7zgzOWrhqHoIgkeakQXziNXlnEEjRos5xEadodH0nUNEJ30DYUdlWJS6qa7o5q3_SrR5UcdxG9OOSXqgAAAGIGqpQR5H6DFbIYuMmqk1vwboLbBUgs7A1Ef3v2cJuPnp:532d81688f2a4d236a992e72b4cd53daf71fd6973a4dc7c4af0a6126a5de951e');
    const [status, setStatus] = useState<{ message: string; ok: boolean } | null>(null);
    const [schema, setSchema] = useState<any>(null);
    const [generatedQueries, setGeneratedQueries] = useState<Query[]>([]);
    const [selectedQuery, setSelectedQuery] = useState<string>('');
    const [customQuery, setCustomQuery] = useState<string>("Can you generate 3 sample queries?");
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            init({ appName: 'graphiql-react' });
        }
    }, []);
    
    
    const isValid = (creds: string): boolean => {
        return /^[^:]+:[^:]+$/.test(creds.trim());
    };


    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
        setStatus(null);
    };

    const handleCredentialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials(e.target.value);
        setStatus(null);
    };


    const generateQueriesWithAPI = useCallback(async (schema: any) => {
        setIsGenerating(true);
        try {
            const requestBody = { 
                schema: schema,
                question: customQuery
            };

            const response = await fetch('https://graph-ql-query-generator.replit.app/generate_queries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`HTTP error! status: ${response.status}, message: ${JSON.stringify(errorData)}`);
            }

            const data = await response.json();
            console.log("Generated queries:", data.response);
            const queries = data.queries;
            setGeneratedQueries(queries);
            
            if (queries.length > 0) {
                setSelectedQuery(queries[0].query);
            }
        } catch (error) {
            console.error("Error generating queries:", error);
        } finally {
            setIsGenerating(false);
        }
    }, [customQuery]);

    const debouncedGenerateQueries = useCallback(
        debounce((schema: any) => generateQueriesWithAPI(schema), 500),
        [generateQueriesWithAPI]
    );

    const fetcher = useCallback(async (graphQLParams: any) => {
        if (!url) {
            console.log('No URL provided');
            return { errors: [{ message: 'No URL provided' }] };
        }

        try {
            console.log('Fetching from URL:', url);
            const headers: HeadersInit = {
                'Content-Type': 'application/json',
            };

            if (isValid(credentials)) {
                const [macaroon, preimage] = credentials.split(':');
                headers['Authorization'] = `L402 ${macaroon}:${preimage}`;
            } else {
                throw new Error('Invalid credentials');
            }

            const response = await fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(graphQLParams),
            });

            console.log('Fetch response status:', response.status);
            
            let result;
            try {
                result = await response.json();
            } catch (e) {
                return { errors: [{ message: 'Failed to parse response as JSON' }] };
            }

            if (response.ok) {
                setStatus({ message: `${response.status} OK`, ok: true });
            } else {
                setStatus({ message: `${response.status} ${response.statusText}`, ok: false });
            }

            if (result.data && result.data.__schema) {
                setSchema(result.data.__schema);
                if (isInitialLoad) {
                    debouncedGenerateQueries(result.data.__schema);
                    setIsInitialLoad(false);
                }
            }

            return result;
        } catch (error) {
            console.error('Fetcher error:', error);
            return {
                errors: [{ 
                    message: error instanceof Error ? error.message : 'An unknown error occurred'
                }]
            };
        }
    }, [url, credentials]);

    const handleGenerateQueries = () => {
        if (schema) {
            debouncedGenerateQueries(schema);
        }
    };

    const handleQuerySelection = (query: string) => {
        setSelectedQuery(query);
    };

    return (
        <div className="graphiql-container" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="graphiql-session-header" style={{ 
                padding: '8px 16px', 
                borderBottom: '1px solid #e0e0e0', 
                display: 'block'
            }}>
                <label htmlFor="url-input" style={{ marginRight: '8px' }}>URL:</label>
                <input
                    id="url-input"
                    type="text"
                    value={url}
                    onChange={handleUrlChange}
                    placeholder="https://api.example.com/graphql"
                    style={{ width: '400px', height: '32px', marginRight: '16px' }}
                />
                {status && (
                    <span style={{
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: status.ok ? 'green' : 'red',
                        marginRight: '16px'
                    }}>
                        {status.message}
                    </span>
                )}
                <label htmlFor="credentials-input" style={{ marginRight: '8px' }}>L402 Credentials:</label>
                <input
                    id="credentials-input"
                    type="text"
                    value={credentials}
                    onChange={handleCredentialsChange}
                    placeholder="macaroon:preimage"
                    style={{ width: '400px', height: '32px', marginRight: '16px' }}
                />
                <button
                    onClick={() => window.open(`http://app.paywithhub.com/purchases?l402_url=${encodeURIComponent(url)}`, '_blank')}
                    style={{
                        backgroundColor: '#8A2BE2',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '0 16px',
                        fontSize: '14px',
                        cursor: 'pointer',
                        height: '32px',
                    }}
                >
                    Pay with Hub
                </button>
            </div>
            <div style={{ padding: '8px 16px', borderBottom: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
                <div style={{ flex: 1, marginRight: '16px' }}>
                    <label htmlFor="custom-query" style={{ display: 'block', marginBottom: '4px' }}>Custom Query:</label>
                    <textarea
                        id="custom-query"
                        value={customQuery}
                        onChange={(e) => setCustomQuery(e.target.value)}
                        style={{
                            width: '100%',
                            height: '60px',
                            resize: 'vertical',
                            color: 'hsla(var(--color-neutral), 1)',
                            fontFamily: 'var(--font-family)',
                            fontSize: 'var(--font-size-caption)',
                            padding: '8px',
                        }}
                        placeholder="Enter your custom query here..."
                    />
                </div>
                <button
                    onClick={handleGenerateQueries}
                    disabled={isGenerating}
                    style={{
                        backgroundColor: 'rgb(138, 43, 226)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '8px 16px',
                        fontSize: '14px',
                        cursor: 'pointer',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {isGenerating ? (
                        <ClipLoader color="#ffffff" size={20} />
                    ) : (
                        'Generate Queries'
                    )}
                </button>
            </div>

            <div style={{ padding: '8px 16px', borderBottom: '1px solid #e0e0e0' }}>
                <h3>Generated Queries:</h3>
                {generatedQueries.map((q, index) => (
                    <button
                        key={index}
                        onClick={() => handleQuerySelection(q.query)}
                        style={{
                            margin: '0 8px 8px 0',
                            padding: '4px 8px',
                            backgroundColor: selectedQuery === q.query ? 'rgb(138, 43, 226)' : '#f0f0f0',
                            color: selectedQuery === q.query ? 'white' : 'black',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        {q.title}
                    </button>
                ))}
            </div>

            <div style={{ flex: 1, overflow: 'auto' }}>
                <GraphiQL
                    fetcher={fetcher}
                    query={selectedQuery}
                    onEditQuery={setSelectedQuery}
                />
            </div>
        </div>
    );
};

export default GraphQLExplorer;