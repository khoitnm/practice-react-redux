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
const Comp02SimpleUseEffectPage = () => {
    componentCount++;
    console.log(`[${componentCount}] Start Component`);

    const dispatch = useDispatch();
    useEffect(() => {
        effectCount++;
        const stringValueState = new Date().toLocaleTimeString();
        console.log(`[${componentCount}] effectCount: ${effectCount}. saveStringValue("${stringValueState}")`);
        dispatch(thunkComp02SimpleUseEffect(stringValueState));
    }, [dispatch]);
    console.log(`[${componentCount}] After useEffect`);

    returnCount++;
    return (
        <div>
            {console.log(`[${componentCount}] Render: ${returnCount}`)}
            <span>
                [{componentCount}] Render: {returnCount}
            </span>
        </div>
    );
};

export default Comp02SimpleUseEffectPage;
