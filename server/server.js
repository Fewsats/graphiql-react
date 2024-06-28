const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Define a schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Define a root resolver
const root = {
    hello: () => 'Hello world!',
};

// Create an express server and a GraphQL endpoint
const app = express();

/*
app.use('/api', createProxyMiddleware({
    target: 'http://localhost:9090',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // remove /api prefix when forwarding to the target
    },
    onProxyRes: (proxyRes, req, res) => {
        console.log('Received response:', proxyRes.statusCode);
        // Forward all headers from the proxy response
        Object.keys(proxyRes.headers).forEach(key => {
            res.setHeader(key, proxyRes.headers[key]);
        });
        // Expose the WWW-Authenticate header
        res.setHeader('Access-Control-Expose-Headers', 'WWW-Authenticate');
    },
    onError: (err, req, res) => {
        console.error('Proxy error:', err);
        res.status(500).json({ error: 'Proxy error' });
    }
}));
 */

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000, () => console.log('GraphQL server running at http://localhost:4000/graphql'));
