import React, {useEffect, useState} from 'react';
import {GraphiQL} from 'graphiql';
import type {Fetcher} from '@graphiql/toolkit';
import 'graphiql/graphiql.min.css';
import {init, launchPaymentModal} from '@getalby/bitcoin-connect-react';
import { Invoice } from '@getalby/lightning-tools';
import parseWWWAuthenticateHeader from "./utils/parseWWWAuthenticateHeader";

interface URL {
    url: string, invoice?: string, macaroon?: string, preimage?: string
}

const App = () => {
    const [urls, setUrls] = useState<URL[]>([]);
    const [activeUrl, setActiveUrl] = useState<URL | null>(null);
    const [paymentHash, setPaymentHash] = useState('N/A');
    const [executeQuery, setExecuteQuery] = useState(false);
    const [input, setInput] = useState('');
    const [credentials, setCredentials] = useState('');
    const [isValidCredentials, setIsValidCredentials] = useState(false);

    useEffect(() => {
        const urls = localStorage.getItem('hub-urls');
        const urlsParsed = urls ? JSON.parse(urls) : [];
        setUrls(urlsParsed);

        // Set executeQuery to true after the component has mounted
        const timer = setTimeout(() => {
            setExecuteQuery(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            init({ appName: 'graphiql-react' });
            window.modalToOpen = true; // Initialize the modal open flag
        }
    }, []);

    useEffect(() => {
        // Basic format check: should be "string:string"
        const isValid = /^[^:]+:[^:]+$/.test(credentials.trim());
        setIsValidCredentials(isValid);
    }, [credentials]);

    const handleCredentialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials(e.target.value);
    };

    const fetcher: Fetcher = async (graphQLParams) => {
        console.log('Fetcher called with params:', graphQLParams);
        
        if (!executeQuery || !window.modalToOpen || !activeUrl) {
            console.log('Preventing initial query execution. Conditions:', {
                executeQuery,
                modalToOpen: window.modalToOpen,
                activeUrlExists: !!activeUrl
            });
            return Promise.resolve({ data: null });
        }

        try {
            console.log('Preparing to fetch from URL:', activeUrl.url);
            let response;
            
            if (isValidCredentials) {
                const [macaroon, preimage] = credentials.split(':');
                console.log('Using authenticated request with L402');
                response = await fetch(activeUrl.url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `L402 ${macaroon}:${preimage}`
                    },
                    body: JSON.stringify(graphQLParams),
                });
            } else {
                console.log('Using unauthenticated request');
                response = await fetch(activeUrl.url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(graphQLParams),
                });
            }

            console.log('Fetch response status:', response.status);
            if (!response.ok) {
                console.error('HTTP error occurred:', response.status, response.statusText);
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            if (response.status === 402) {
                const wwwAuthenticateHeader = response.headers.get('WWW-Authenticate');
                if (wwwAuthenticateHeader) {
                    const { macaroon, invoice } = parseWWWAuthenticateHeader(wwwAuthenticateHeader);
                    let paymentHash = '';
                    if (invoice) {
                        const invoiceObj = new Invoice({ pr: invoice });
                        paymentHash = invoiceObj?.paymentHash;
                    }
                    console.log('L402 authentication required:', { macaroon, invoice, paymentHash });
                    // Here you can handle the L402 challenge, e.g., by showing a payment modal
                    // For now, we'll just log the information
                }
                throw new Error('Payment required');
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
    };

    console.log('paymentHash', paymentHash);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const urlsUpdated = [...urls, { url: input }];
        setUrls(urlsUpdated)
        localStorage.setItem('hub-urls', JSON.stringify(urlsUpdated))
    }

    const handleInputChange = (event: any) => {
        setInput(event.target.value);
    }

    const handleSetActiveUrl = (item: URL) => () => {
        setActiveUrl(item);
    }

    return <div className={'root'}>
        <div className={'flex flex-column container'}>
            <div>
                Example of not authorized and authorized URLs to add to localstorage as <b><i>hub-urls</i></b> key:

                <div className={'example'}>
                    {`[{"url":" http://localhost:9090/query"},{"url":"http://localhost:9090/query", "preimage": "2f84e22556af9919f695d7761f404e98ff98058b7d32074de8c0c83bf63eecd7", "invoice": "lnbcrt1u1p3d23dkpp58r92m0s0vyfdnd3caxhzgvu006dajv9r8pcspknhvezw26t9e8qsdq5g9kxy7fqd9h8vmmfvdjscqzpgxqyz5vqsp59efe44rg6cjl3xwh9glgx4ztcgwtg5l8uhry2v9v7s0zn2wpaz2s9qyyssq2z799an4pt4wtfy8yrk5ee0qqj7w5a74prz5tm8rulwez08ttlaz9xx7eqw7fe94y7t0600d03k55fyguyj24nd9tjmx6sf7dsxkk4gpkyenl8", "macaroon": "AgFQaHR0cHM6Ly9hcGkuZmV3c2F0cy5jb20vdjAvc3RvcmFnZS9kb3dubG9hZC9iMGRmYTY2Ny1iYWZlLTQ2NDgtYTM3MS1iOTRjOGE4N2RhNjUCQgAAOMqtvg9hEtm2OOmuJDOPfpvZMKM4cQDad2ZE5WllycFZ8z4N-KDJY2j-PCnnmIE9XCS-7nBdmjEOVrPiUNNgnwAABiD6XRVzntfAoqZOpmuCKO8zV2BxTwQoiDk3mnmOl8jSvA"}]`}
                </div>
            </div>
            <div>
                Click on added URL and run the query ↓
            </div>
            <div>
                List of available URLs:
            </div>
           <ol>
               {
                   urls.map((item, i) => (<li key={i} className={`hoverable ${item.url === activeUrl?.url && item.macaroon === activeUrl?.macaroon ? 'active' : ''}`} onClick={handleSetActiveUrl(item)}>
                       <div>URL: {item.url}</div>
                       {
                           item.preimage &&
                           <div>Preimage: {item.preimage}</div>
                       }
                       {
                           item.macaroon &&
                           <div>Macaroon: {item.macaroon}</div>
                       }
                       {
                           item.invoice &&
                           <div>Invoice: {item.invoice}</div>
                       }
                   </li>))
               }
           </ol>
            <form onSubmit={handleSubmit} className={'flex flex-column'}>
                <div>
                    Add new URL:
                </div>
                <div className={'flex'}>
                    <input
                        type={'text'}
                        name={'url'}
                        onChange={handleInputChange}
                        value={input}
                    />
                    <button type={'submit'}>Submit</button>
                </div>
            </form>
            <div className={'flex flex-column'}>
                <div>Enter L402 Credentials (macaroon:preimage):</div>
                <input
                    type={'text'}
                    value={credentials}
                    onChange={handleCredentialsChange}
                    placeholder="Enter credentials"
                    className={`border ${isValidCredentials ? 'border-green-500' : 'border-red-500'} rounded px-2 py-1`}
                />
                {!isValidCredentials && credentials !== '' && (
                    <div className="text-red-500 text-sm">Invalid format. Should be 'macaroon:preimage'.</div>
                )}
            </div>
        </div>
        <GraphiQL fetcher={fetcher} />
    </div>;
}

export default App;