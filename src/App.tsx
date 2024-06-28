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

    const fetcher: Fetcher = async (graphQLParams) => {
        if (!executeQuery || !window.modalToOpen || !activeUrl) {
            // Prevent the initial query execution
            return Promise.resolve({ data: null });
        }

        if (activeUrl && activeUrl.macaroon && activeUrl.preimage) {
            const response = await fetch(activeUrl.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `L402 ${activeUrl.macaroon}:${activeUrl.preimage}`
                },
                body: JSON.stringify(graphQLParams),
            })

            if (!response.ok) {
                throw new Error(
                    `Request failed with status ${response.status}`
                );
            }

            return response.json().catch(() => response.text());
        }

        if (window.modalToOpen) {
            let l402Header = null;

            try {
                await fetch(activeUrl.url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(graphQLParams)
                })
                    .then(response => {
                        console.log('response 111', response);
                        if (!response.ok) {
                            // throw new Error(`HTTP error! status: ${response.status}`);
                            console.log(`err?.response?.status`, response?.status);
                            console.log(
                                ` err.response.headers.get('WWW-Authenticate')`,
                                response.headers.get('WWW-Authenticate')
                            );

                            if (response.headers) {
                                console.log('err.response.headers', response.headers);
                                Object.keys(response.headers).forEach((key) => {
                                    console.log(key, response.headers.get(key));
                                });
                            }

                            if (
                                response?.status === 402 &&
                                response?.headers &&
                                response?.headers.get('WWW-Authenticate')
                            ) {
                                console.log('err.response.headers', response);
                                l402Header = response.headers.get('WWW-Authenticate');
                            }
                        }
                    })
                    .catch((err) => {
                        console.log(`err`, err);
                    })

                console.log('l402Header', l402Header);
                if (!l402Header) {
                    // toast.error('Payment unsuccessful, no 402 header found')
                    return;
                }

                const {macaroon, invoice}: { macaroon?: string; invoice?: string } =
                    parseWWWAuthenticateHeader(l402Header);
                console.log('macaroon:', macaroon);
                console.log('invoice:', invoice);

                const urlsUpdated = [
                    ...urls.filter((item) => item.url === activeUrl.url),
                    {
                        ...activeUrl,
                        macaroon,
                        invoice
                    }
                ];
                setUrls(urlsUpdated)
                localStorage.setItem('hub-urls', JSON.stringify(urlsUpdated))

                let localPaymentHash = '';
                if (invoice) {
                    const invoiceObj = new Invoice({pr: invoice});
                    localPaymentHash = invoiceObj?.paymentHash || '';
                    setPaymentHash(localPaymentHash);
                }

                if (macaroon && invoice) {
                    window.modalToOpen = false;
                    launchPaymentModal({
                        invoice,
                        paymentMethods: 'internal',
                        onPaid: async ({ preimage }) => {
                            console.log('preimage', preimage);

                            const urlsUpdated = [
                                ...urls.filter((item) => item.url === activeUrl.url),
                                {
                                    ...activeUrl,
                                    macaroon,
                                    invoice,
                                    preimage
                                }
                            ];
                            setUrls(urlsUpdated)
                            localStorage.setItem('hub-urls', JSON.stringify(urlsUpdated))

                            window.modalToOpen = true;
                            const response = await fetch(activeUrl.url, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    Authorization: `L402 ${macaroon}:${preimage}`
                                },
                                body: JSON.stringify(graphQLParams),
                            })

                            if (!response.ok) {
                                throw new Error(
                                    `Request failed with status ${response.status}`
                                );
                            }

                            return response.json().catch(() => response.text());
                        },
                        onCancelled: async () => {
                            window.modalToOpen = true;
                        },
                    });
                }
            } catch (e) {
                return Promise.resolve({ data: null });
            } finally {
            }

            return Promise.resolve({ data: null });
        }

        return Promise.resolve({ data: null });
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
        </div>
        <GraphiQL fetcher={fetcher} />
    </div>;
}

export default App;
