import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DocumentDetailPage from './file/detail/DocumentDetailPage';
import FilesBrowserPage from './file/browser/FilesBrowserPage';
import Navigation from './layout/Navigation';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        /* The code here must match Navigation component */
                        <Route path="/document/detail/:documentId" component={DocumentDetailPage} />
                        <Route path="/file/browser/:folderId" component={FilesBrowserPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
