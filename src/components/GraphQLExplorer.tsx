import React, { useState, useEffect, useCallback } from 'react';
import { GraphiQL } from 'graphiql';
import type { Fetcher } from '@graphiql/toolkit';
import 'graphiql/graphiql.min.css';
import { init } from '@getalby/bitcoin-connect-react';
import { Invoice } from '@getalby/lightning-tools';
import parseWWWAuthenticateHeader from "../utils/parseWWWAuthenticateHeader";
import OpenAI from 'openai';
import { zodResponseFormat } from 'openai/helpers/zod';
import { z } from 'zod';

const GraphQLQuery = z.object({
    title: z.string(),
    query: z.string(),
});

const GraphQLQueries = z.object({
    queries: z.array(GraphQLQuery),
});

const GraphQLExplorer: React.FC = () => {
    const [url, setUrl] = useState('https://countries.trevorblades.com/');
    const [credentials, setCredentials] = useState('');
    const [isValidCredentials, setIsValidCredentials] = useState(false);
    const [status, setStatus] = useState<{ message: string; ok: boolean } | null>(null);
    const [schema, setSchema] = useState<any>(null);
    const [generatedQueries, setGeneratedQueries] = useState<Array<{ title: string; query: string }>>([]);
    const [selectedQueryIndex, setSelectedQueryIndex] = useState<number | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            init({ appName: 'graphiql-react' });
        }
    }, []);

    useEffect(() => {
        const isValid = /^[^:]+:[^:]+$/.test(credentials.trim());
        setIsValidCredentials(isValid);
    }, [credentials]);

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
        setStatus(null);
    };

    const handleCredentialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials(e.target.value);
        setStatus(null);
    };

    const generateQueriesWithChatGPT = useCallback(async (schema: any) => {
        console.log("api key", process.env.OPENAI_API_KEY)
        const client = new OpenAI({apiKey: 'sk-XXXXX', dangerouslyAllowBrowser: true });

        const prompt = `Given the following GraphQL schema, generate 3 example queries:

        ${JSON.stringify(schema, null, 2)}

        Please provide diverse and interesting queries that showcase different aspects of the schema.`;

        try {
            const completion = await client.beta.chat.completions.parse({
                model: "gpt-4o-2024-08-06",
                messages: [
                    {
                        role: "system",
                        content: "You are a helpful GraphQL query generator. Only use the schema for GraphQL query responses.",
                    },
                    { role: "user", content: prompt },
                ],
                response_format: zodResponseFormat(GraphQLQueries, 'graphQLQueries'),
            });

            const message = completion.choices[0]?.message;
            if (message?.parsed) {
                console.log("Generated queries:", message.parsed.queries);
                setGeneratedQueries(message.parsed.queries);
                setSelectedQueryIndex(0); // Select the first query by default
            } else if (message?.refusal) {
                console.log("Query generation refused:", message.refusal);
            } else {
                console.log("Unexpected response format");
            }
        } catch (error) {
            console.error("Error generating queries:", error);
        }
    }, []);

    const fetcher: Fetcher = useCallback(async (graphQLParams) => {
        if (!url) {
            console.log('No URL provided');
            return Promise.resolve({ data: null });
        }

        try {
            console.log('Fetching from URL:', url);
            let response;
            
            const headers: HeadersInit = {
                'Content-Type': 'application/json',
            };

            if (isValidCredentials) {
                const [macaroon, preimage] = credentials.split(':');
                headers['Authorization'] = `L402 ${macaroon}:${preimage}`;
            }

            response = await fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(graphQLParams),
            });

            console.log('Fetch response status:', response.status);
            if (response.ok) {
                setStatus({ message: `${response.status} OK`, ok: true });
            } else if (response.status === 402) {
                setStatus({ message: '402 Payment Required', ok: false });
                const wwwAuthenticateHeader = response.headers.get('WWW-Authenticate');
                if (wwwAuthenticateHeader) {
                    const { macaroon, invoice } = parseWWWAuthenticateHeader(wwwAuthenticateHeader);
                    let paymentHash = '';
                    if (invoice) {
                        const invoiceObj = new Invoice({ pr: invoice });
                        paymentHash = invoiceObj?.paymentHash;
                    }
                    console.log('L402 authentication required:', { macaroon, invoice, paymentHash });
                }
                throw new Error('Payment required');
            } else {
                setStatus({ message: `${response.status} ${response.statusText}`, ok: false });
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Fetcher received result:', result);
            
            if (result.data && result.data.__schema) {
                setSchema(result.data.__schema);
                generateQueriesWithChatGPT(result.data.__schema);
            }

            if (result.errors) {
                console.error('GraphQL errors in response:', result.errors);
            }

            return result;
        } catch (error) {
            console.error('Fetcher error:', error);
            throw error;
        }
    }, [url, credentials, isValidCredentials, generateQueriesWithChatGPT]);

    const handleQuerySelect = (index: number) => {
        setSelectedQueryIndex(index);
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
            <div style={{ padding: '8px 16px', borderBottom: '1px solid #e0e0e0' }}>
                <h3>Example Queries:</h3>
                {generatedQueries.map((query, index) => (
                    <button
                        key={index}
                        onClick={() => handleQuerySelect(index)}
                        style={{
                            margin: '0 8px 8px 0',
                            padding: '4px 8px',
                            backgroundColor: selectedQueryIndex === index ? '#4CAF50' : '#f0f0f0',
                            color: selectedQueryIndex === index ? 'white' : 'black',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        {query.title}
                    </button>
                ))}
            </div>
            <div style={{ flex: 1, overflow: 'auto' }}>
                <GraphiQL
                    fetcher={fetcher}
                    query={selectedQueryIndex !== null ? generatedQueries[selectedQueryIndex]?.query : undefined}
                />
            </div>
        </div>
    );
};

export default GraphQLExplorer;