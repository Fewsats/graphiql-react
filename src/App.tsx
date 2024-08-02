import React from 'react';
import GraphQLExplorer from './components/GraphQLExplorer';

const App: React.FC = () => {
    return (
        <div className="graphiql-container" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="graphiql-header" style={{ paddingLeft: '1rem', margin: 0 }}>
                <h1 className="graphiql-title" style={{ marginBottom: 0 }}>GraphQL Explorer</h1>
            </div>
            <div style={{ flex: 1, overflow: 'hidden' }}>
                <GraphQLExplorer />
            </div>
        </div>
    );
};

export default App;