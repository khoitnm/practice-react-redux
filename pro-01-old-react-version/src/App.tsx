import React from 'react';
import Comp00SimplePage from './comp-00-simple/Comp00SimplePage';
import Comp01SimpleUseSelectPage from './comp-01-simple-useSelect/Comp01SimpleUseSelectPage';
import Comp02SimpleUseEffectPage from './comp-02-simple-useEffect/Comp02SimpleUseEffectPage';
import Comp03UseEffectUseSelectorPage from './comp-03-useEffect-useSelector/Comp03UseEffectUseSelectorPage';
import Comp04ClickButtonPage from './comp-04-clickButton/Comp04ClickButtonPage';

const App = (): JSX.Element => {
    return (
        <Comp04ClickButtonPage />
        // <Comp03UseEffectUseSelectorPage />
        // <Comp02SimpleUseEffectPage />
        // <Comp01SimpleUseSelectPage />
        // <Comp00SimplePage />
    );
};

export default App;
