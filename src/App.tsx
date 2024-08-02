import React from 'react';
import GraphQLExplorer from './components/GraphQLExplorer';

const App: React.FC = () => {
    return (
        <div className="app" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ padding: '1rem', margin: 0 }}>GraphQL Explorer</h1>
            <div style={{ flex: 1, overflow: 'hidden' }}>
                <GraphQLExplorer />
            </div>
        </div>
    );
};

export default App;