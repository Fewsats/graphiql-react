import React, {useEffect, useState} from 'react';
import {GraphiQL} from 'graphiql';
import type {Fetcher} from '@graphiql/toolkit';
import 'graphiql/graphiql.min.css';
import {init, launchPaymentModal} from '@getalby/bitcoin-connect-react';
import { Invoice } from '@getalby/lightning-tools';
import parseWWWAuthenticateHeader from "./utils/parseWWWAuthenticateHeader";

const App = () => {
    const [paymentHash, setPaymentHash] = useState('N/A');
    const [executeQuery, setExecuteQuery] = useState(false);

    useEffect(() => {
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

    const fetcher: Fetcher = async graphQLParams => {
        if (!executeQuery || !window.modalToOpen) {
            // Prevent the initial query execution
            return Promise.resolve({ data: null });
        }

        if (window.modalToOpen) {
            let l402Header = null;

            try {
                // replace 'http://localhost:4000/api/query' with 'http://localhost:9090/query' if stop using proxy
                // now proxy is set to prevent cors errors
                await fetch('http://localhost:4000/api/query', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        // 'x-hasura-admin-secret': 'myadminsecretkey'
                    },
                    body: JSON.stringify(graphQLParams),
                    credentials: 'same-origin',
                })
                    .then(response => {
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
                        // without proxy added the extraction of WWW-Authenticate can probably become available here
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
                            window.modalToOpen = true;
                            // replace 'http://localhost:4000/api/query' with 'http://localhost:9090/query' if stop using proxy
                            // now proxy is set to prevent cors errors
                            const response = await fetch('http://localhost:4000/api/query', {
                                method: 'POST',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                    Authorization: `L402 ${macaroon}:${preimage}`
                                },
                                body: JSON.stringify(graphQLParams),
                                credentials: 'same-origin',
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

    return <div className={'root'}>
        <GraphiQL fetcher={fetcher} />
    </div>;
}

export default App;
