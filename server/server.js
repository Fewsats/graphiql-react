const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');

// Define a schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Define a root resolver
const root = {
    hello: () => {
        return 'Hello world!';
    },
};

// Middleware to check for authorization
const checkAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== 'Bearer auth-token') {
        console.log('111')
        res.status(401).send('Unauthorized');
        return;
    }
    next();
};

// Create an express server and a GraphQL endpoint
const app = express();

// Use CORS middleware
app.use(cors());

// Use the authorization middleware
app.use(checkAuth);

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000, () => console.log('GraphQL server running at http://localhost:4000/graphql'));
