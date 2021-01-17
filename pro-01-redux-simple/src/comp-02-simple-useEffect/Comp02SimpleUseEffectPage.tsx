import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { thunkComp02SimpleUseEffect } from './state/Comp02SimpleUseEffectThunk';

let componentCount = 0;
let returnCount = 0;
let effectCount = 0;

/**
 * Why our component is executed many times:
 * https://stackoverflow.com/questions/58697073/multiple-times-render-in-react-functional-component-with-hooks
 * Everytime we update the state, this functional component will be executed again (doesn't mean the DOM is rendered multiple time).
 *
 *
 * @param match
 * @constructor
 */
const Comp02SimpleUseEffectPage = (): JSX.Element => {
    componentCount++;
    console.log(`[${componentCount}] component - START`);

    const dispatch = useDispatch();
    useEffect(() => {
        effectCount++;
        console.log(`[${componentCount}] effectCount: ${effectCount}.`);
        dispatch(thunkComp02SimpleUseEffect(`${new Date().getTime()}`));
    }, [dispatch]);
    console.log(`[${componentCount}] component - after useEffect`);

    returnCount++;
    return (
        <div>
            {console.log(`[${componentCount}] renderCount: ${returnCount}`)}
            <span>
                [{componentCount}] renderCount: {returnCount}
            </span>
        </div>
    );
};

export default Comp02SimpleUseEffectPage;
