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
const { getIntrospectionQuery } = require('graphql')


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
    const [url, setUrl] = useState('https://api.fewsats.com/v0/gateway/access/51be29af-c243-4807-9c96-a697a10e3dad');
    const [credentials, setCredentials] = useState('AgELZmV3c2F0cy5jb20CQgAAm4Ge0/bzgBY78yjt+aBp5sI/zugNXGnQ/84wEelHXcQeIpsV61ipIh8tBMJMWwbKYD1TIcoU0W+wzCMZNJwumQACMGV4dGVybmFsX2lkPTUxYmUyOWFmLWMyNDMtNDgwNy05Yzk2LWE2OTdhMTBlM2RhZAACH2V4cGlyZXNfYXQ9MjAyNC0wOS0yMlQxNjoyNTozMVoAAAYgjnnPh1MuAEpYT84B799fistV7ir0M6Uo/FQgqAH1nDw=:2a578822936e1ee6438ab4654a88d4347604d6cee6c390221bce503fab0f708b');
    const [status, setStatus] = useState<{ message: string; ok: boolean } | null>(null);
    const [schema, setSchema] = useState<any>(null);
    const [generatedQueries, setGeneratedQueries] = useState<Query[]>([]);
    const [selectedQuery, setSelectedQuery] = useState<string>('');
    const [customQuery, setCustomQuery] = useState<string>("Can you show me how to retrieve all communities?");
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
            }
            const response = await fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(graphQLParams),
            });

            console.log('Fetch response status:', response.status);
            
            console.log("Response:", response);
            if (response.ok) {
                setStatus({ message: `${response.status} OK`, ok: true });
            } else {
                const text = await response.text();
                setStatus({ message: `${response.status} ${text}`, ok: false });
            }

            let result;
            try {
                result = await response.json();
            } catch (e) {
                return { errors: [{ message: 'Failed to parse response as JSON' }] };
            }


            return result;
        } catch (error) {
            console.error('Fetcher error:', error);
            setStatus({ message: `${error}`, ok: false });
            return {
                errors: [{ 
                    message: error instanceof Error ? error.message : 'An unknown error occurred'
                }]
            };
        }
    }, [url, credentials]);

    const refetchSchema = useCallback(() => {
        fetcher({ query: getIntrospectionQuery() })
            .then((result) => {
                if (result.data && result.data.__schema) {
                    setSchema(result.data.__schema);
                    if (isInitialLoad) {
                        debouncedGenerateQueries(result.data.__schema);
                        setIsInitialLoad(false);
                    }
                }
                // The fetcher already sets the status, so we don't need to set it here
            })
            .catch((error) => {
                console.error('Error fetching schema:', error);
                // The fetcher should handle setting the status for errors as well
            });
    }, [fetcher, debouncedGenerateQueries, isInitialLoad]);

    useEffect(() => {
        console.log("Refetching schema");
        refetchSchema();
    }, [url, credentials, refetchSchema]);

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
                    <span id="endpoint-status" style={{
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