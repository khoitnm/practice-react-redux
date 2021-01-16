import React, { Component } from 'react';
import Comp00SimplePage from './comp-00-simple/Comp00SimplePage';
import Comp01SimpleUseSelectPage from './comp-01-simple-useSelect/Comp01SimpleUseSelectPage';
import Comp02SimpleUseEffectPage from './comp-02-simple-useEffect/Comp02SimpleUseEffectPage';

class App extends Component {
    render() {
        // return <Comp00SimplePage />;
        // return <Comp01SimpleUseSelectPage />;
        return <Comp02SimpleUseEffectPage />;
        // return <NoRouterPage stringValue={new Date().toLocaleTimeString()} />;
    }
}

export default App;
