import React, { Component } from 'react';
import Comp00SimplePage from './comp-00-simple/Comp00SimplePage';
import Comp01SimpleUseSelectPage from './comp-01-simple-useSelect/Comp01SimpleUseSelectPage';

class App extends Component {
    render() {
        // return <Comp00SimplePage />;
        return <Comp01SimpleUseSelectPage />;
        // return <NoRouterPage stringValue={new Date().toLocaleTimeString()} />;
    }
}

export default App;
