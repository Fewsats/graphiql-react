import React from 'react';
import GraphQLExplorer from './components/GraphQLExplorer';

const App: React.FC = () => {
    return (
        <div className="app">
            <h1>GraphQL Explorer</h1>
            <GraphQLExplorer />
        </div>
    );
};

export default App;