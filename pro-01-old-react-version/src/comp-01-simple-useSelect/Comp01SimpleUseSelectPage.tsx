import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../config/redux/rootReducer';

let componentCount = 0;
let selectorCount = 0;
let returnCount = 0;

/**
 * Why our component is executed many times:
 * https://stackoverflow.com/questions/58697073/multiple-times-render-in-react-functional-component-with-hooks
 * Everytime we update the state, this functional component will be executed again (doesn't mean the DOM is rendered multiple time).
 *
 *
 * @param match
 * @constructor
 */
const Comp01SimpleUseSelectPage = (): JSX.Element => {
    componentCount++;
    console.log(`[${componentCount}] component - START`);

    const stringValueState = useSelector((rootState: RootState): string => {
        selectorCount++;
        console.log(`[${componentCount}] selectorCount: ${selectorCount}`);
        return rootState.comp01SimpleUseSelectSlice.stringValue;
    });
    console.log(`[${componentCount}] component - after useSelectorCount: stringValueState: ${stringValueState}`);

    returnCount++;
    return (
        <div>
            {console.log(`[${componentCount}] Return renderCount: ${returnCount}`)}

            {stringValueState}
        </div>
    );
};

export default Comp01SimpleUseSelectPage;
