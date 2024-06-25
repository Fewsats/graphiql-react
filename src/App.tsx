import React, {useEffect} from 'react';
import {GraphiQL} from 'graphiql';
import type {Fetcher} from '@graphiql/toolkit';
import 'graphiql/graphiql.min.css';
import {init, launchPaymentModal} from '@getalby/bitcoin-connect-react';

const fetcher: Fetcher = async graphQLParams => {
    if (!window.modalOpen) {
        const fetchGraphQL = async (token: unknown) => {
            return await fetch('http://localhost:4000/graphql', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(graphQLParams),
                credentials: 'same-origin',
            });
        };

        let token: unknown = 'auth-token-test';
        let response: any = await fetchGraphQL(token);

        /*
           // Uncomment to try with valid token to avoid 401 Unauthorized error
           // Simulate auth refresh
           token = await refreshAuthToken();

           if (token) {
               // Retry the request with the new token
               response = await fetchGraphQL(token);

               if (!response.ok) {
                   throw new Error(
                       `Request failed with status ${response.status}`
                    );
               }

               return response.json().catch(() => response.text());
            }
        */

        if (!response.ok) {
            if (response.status === 401) {
                try {
                    window.modalOpen = true;
                    launchPaymentModal({
                        invoice: 'invoice',
                        paymentMethods: 'internal',
                        onPaid: async (response: any) => {
                            window.modalOpen = false;
                            // Simulate auth refresh
                            token = await refreshAuthToken();

                            if (token) {
                                // Retry the request with the new token
                                response = await fetchGraphQL(token);

                                if (!response.ok) {
                                    throw new Error(
                                        `Request failed with status ${response.status}`
                                    );
                                }

                                return response.json().catch(() => response.text());
                            }
                        },
                        onCancelled: () => {
                            window.modalOpen = false;
                        },
                    });
                } catch (e) {
                    const response = new Response(JSON.stringify({message: 'error'}), {
                        'status': 500,
                        'statusText': 'Error'
                    });
                    return response.json().catch(() => response.text());
                }
            }
        } else {
            return response.json().catch(() => response.text());
        }
    }

    const response = new Response(JSON.stringify({message: 'error'}), {
        'status': 500,
        'statusText': 'Error'
    });
    return response.json().catch(() => response.text());
};

const refreshAuthToken = async () => {
    // Simulate an async token refresh process (e.g., making an API call to refresh the token)
    // Here we just return a new token for demonstration purposes
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('auth-token');
        }, 1000); // Simulate network delay
    });
};

const App = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            init({ appName: 'Fewsats' });
            window.modalOpen = false; // Initialize the modal open flag
        }
    }, []);

    return <div className={'root'}>
        <GraphiQL fetcher={fetcher} />
    </div>;
}

export default App;
