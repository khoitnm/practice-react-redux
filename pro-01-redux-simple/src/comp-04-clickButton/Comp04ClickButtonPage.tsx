import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkComp04ClickButton } from './state/Comp04ClickButtonThunk';
import { RootState } from '../config/redux/rootReducer';

// componentCount is the main count
let componentCount = 0;

// below are sub-counts
let returnCount = 0;
let useSelectorCount = 0;
let useEffectCount = 0;

/**
 * Why our component is executed many times:
 * https://stackoverflow.com/questions/58697073/multiple-times-render-in-react-functional-component-with-hooks
 * Everytime we update the state, this functional component will be executed again (doesn't mean the DOM is rendered multiple time).
 *
 *
 * @param match
 * @constructor
 */
const Comp04ClickButtonPage = () => {
    componentCount++;
    console.log(`[${componentCount}] START COMPONENT ----------------------`);

    // useSelector
    const stringValueState = useSelector((rootState: RootState): string => {
        useSelectorCount++;
        console.log(`[${componentCount}] selector: ${useSelectorCount}`);
        return rootState.comp04ClickButtonSlice.stringValue;
    });
    console.log(`[${componentCount}] After useSelector: stringValueState: ${stringValueState}`);

    // useEffect
    const dispatch = useDispatch();
    useEffect(() => {
        useEffectCount++;
        console.log(`[${componentCount}] effectCount: ${useEffectCount}.`);
        dispatch(thunkComp04ClickButton(`${new Date().getTime()}`));
    }, [dispatch]);
    console.log(`[${componentCount}] After useEffect`);

    const onClickButton = () => {
        componentCount = returnCount = useSelectorCount = useEffectCount = 0; // reset counts
        console.log(`[${componentCount}] onClickNewValue`);
        dispatch(thunkComp04ClickButton(`Random ${new Date().getTime()}`));
    };

    // render
    returnCount++;
    return (
        <div>
            {console.log(`[${componentCount}] Render: ${returnCount}`)}
            <div>
                [{componentCount}], useEffect: {useEffectCount}, useSelector: {useSelectorCount}, returnCount: {returnCount}
            </div>
            <button onClick={onClickButton}>Click Button</button>
        </div>
    );
};

export default Comp04ClickButtonPage;
