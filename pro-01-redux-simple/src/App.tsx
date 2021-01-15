import React, { Component } from 'react';
import NoRouterPage from './noRouter/NoRouterPage';

class App extends Component {
    render() {
        return <NoRouterPage stringValue={new Date().toLocaleTimeString()} />;
    }
}

export default App;
