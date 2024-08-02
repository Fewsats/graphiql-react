import React, { useState, useEffect, useCallback } from 'react';
import { GraphiQL } from 'graphiql';
import type { Fetcher } from '@graphiql/toolkit';
import 'graphiql/graphiql.min.css';
import { init } from '@getalby/bitcoin-connect-react';
import { Invoice } from '@getalby/lightning-tools';
import parseWWWAuthenticateHeader from "../utils/parseWWWAuthenticateHeader";

const INPUT_WIDTH = '500px';
const LABEL_WIDTH = '150px';

const GraphQLExplorer: React.FC = () => {
    const [url, setUrl] = useState('');
    const [credentials, setCredentials] = useState('');
    const [isValidCredentials, setIsValidCredentials] = useState(false);
    const [status, setStatus] = useState<{ message: string; ok: boolean } | null>(null);

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
                setStatus({ message: `${response.status} ${response.statusText || 'OK'}`, ok: true });
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
                setStatus({ message: `${response.status} ${response.statusText || 'Error'}`, ok: false });
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Fetcher received result:', result);
            
            if (result.errors) {
                console.error('GraphQL errors in response:', result.errors);
            }

            return result;
        } catch (error) {
            console.error('Fetcher error:', error);
            throw error;
        }
    }, [url, credentials, isValidCredentials]);

    return (
        <div className="root">
            <div className="flex flex-column container p-4 bg-gray-100 rounded-lg shadow mb-4">
                <div className="flex items-center mb-4">
                    <label htmlFor="url-input" className="font-semibold text-right pr-4" style={{ width: LABEL_WIDTH }}>GraphQL URL:</label>
                    <div className="flex-grow">
                        <input
                            id="url-input"
                            type="text"
                            value={url}
                            onChange={handleUrlChange}
                            placeholder="https://api.example.com/graphql"
                            className="border rounded px-2 py-1"
                            style={{ width: INPUT_WIDTH }}
                        />
                        {status && (
                            <span style={{
                                marginLeft: '1rem',
                                fontWeight: 'bold',
                                color: status.ok ? '#16a34a' : '#dc2626'
                            }}>
                                {status.message}
                            </span>
                        )}
                    </div>
                </div>
                <div className="flex items-center">
                    <label htmlFor="credentials-input" className="font-semibold text-right pr-4" style={{ width: LABEL_WIDTH }}>L402 Credentials:</label>
                    <div>
                        <input
                            id="credentials-input"
                            type="text"
                            value={credentials}
                            onChange={handleCredentialsChange}
                            placeholder="macaroon:preimage"
                            className="border rounded px-2 py-1"
                            style={{ 
                                width: INPUT_WIDTH,
                                borderColor: isValidCredentials ? '#22c55e' : (credentials ? '#ef4444' : '#e5e7eb')
                            }}
                        />
                        {!isValidCredentials && credentials !== '' && (
                            <div style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                                Invalid format. Should be 'macaroon:preimage'.
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <GraphiQL fetcher={fetcher} />
        </div>
    );
};

export default GraphQLExplorer;