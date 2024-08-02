# GraphiQL React L402 Explorer

## Live Demo
Try out the live demo at [https://fewsats.github.io/graphiql-react/](https://fewsats.github.io/graphiql-react/)

## Overview
This project is a GraphiQL-based web application that allows users to interact with GraphQL endpoints, including those protected by L402 authentication. It's part of a demonstration on how to monetize your database using L402 protocol.

## Features
- GraphiQL interface for exploring and querying GraphQL endpoints
- Support for L402 authentication
- Ability to add and manage L402 credentials
- Integration with payment systems for purchasing access
- Works as a general GraphiQL explorer for non-L402 endpoints

## Getting Started

### Prerequisites
- Node.js
- yarn


### Running the Application

To install the dependencies:

```
yarn install
```

To start the application in development mode:

```
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage
1. Enter the GraphQL endpoint URL in the provided input field.
2. If the endpoint requires L402 authentication, enter the credentials in the format `macaroon:preimage`.
3. Use the GraphiQL interface to write and execute GraphQL queries.
4. If payment is required, use the "Pay with Hub" button to purchase access.

## Related Projects
- [Flask L402 Data Server](https://replit.com/t/fewsats/czjf93/repls/Flask-L402-Data/view#README.md): The backend server exposing a SQLite database as a GraphQL endpoint, protected by L402.
- [L402 Python Package](https://github.com/Fewsats/l402-python): Python package for implementing L402 authentication.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
[Add appropriate license information here]

## Acknowledgements
- GraphiQL
- Create React App
- L402 Protocol