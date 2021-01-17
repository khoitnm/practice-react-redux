import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkComp03UseEffectUseSelector } from './state/Comp03UseEffectUseSelectorThunk';
import { RootState } from '../config/redux/rootReducer';

let componentCount = 0;
let returnCount = 0;
let selectorCount = 0;
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
const Comp03UseEffectUseSelectorPage = (): JSX.Element => {
    componentCount++;
    console.log(`[${componentCount}] START COMPONENT ----------------------`);

    // useSelector
    const stringValueState = useSelector((rootState: RootState): string => {
        selectorCount++;
        console.log(`[${componentCount}] selector: ${selectorCount}`);
        return rootState.comp03UseEffectUseSelectorSlice.stringValue;
    });
    console.log(`[${componentCount}] After useSelector: stringValueState: ${stringValueState}`);

    // useEffect
    const dispatch = useDispatch();
    useEffect(() => {
        effectCount++;
        console.log(`[${componentCount}] effectCount: ${effectCount}.`);
        dispatch(thunkComp03UseEffectUseSelector(`${new Date().getTime()}`));
    }, [dispatch]);
    console.log(`[${componentCount}] After useEffect`);

    // render
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

export default Comp03UseEffectUseSelectorPage;
