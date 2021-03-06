import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkComp04ClickButton } from './state/Comp04ClickButtonThunk';
import { RootState } from '../config/redux/rootReducer';

let componentCount = 0;
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
const Comp04ClickButtonPage = (): JSX.Element => {
    componentCount++;
    console.log(`[${componentCount}] component - START ----------------------`);

    // useSelector
    const stringValueState = useSelector((rootState: RootState): string => {
        useSelectorCount++;
        console.log(`[${componentCount}] selectorCount: ${useSelectorCount}`);
        const result = rootState.comp04ClickButtonSlice.stringValue;
        return result;
    });
    console.log(`[${componentCount}] component - after useSelectorCount`);

    // useEffect
    const dispatch = useDispatch();
    useEffect(() => {
        useEffectCount++;
        console.log(`[${componentCount}] effectCount: ${useEffectCount}.`);
        dispatch(thunkComp04ClickButton(`${new Date().getTime()}`));
    }, [dispatch]);
    console.log(`[${componentCount}] component - after useEffect`);

    const onClickButton = () => {
        componentCount = returnCount = useSelectorCount = useEffectCount = 0; // reset counts
        console.log(`[${componentCount}] onClickNewValue`);
        dispatch(thunkComp04ClickButton(`Random ${new Date().getTime()}`));
    };

    // render
    returnCount++;
    return (
        <div>
            {console.log(`[${componentCount}] renderCount: ${returnCount}`)}
            <div>
                [{componentCount}], useEffect: {useEffectCount}, useSelectorCount: {useSelectorCount}, returnCount: {returnCount}
            </div>
            <button onClick={onClickButton}>Click Button</button>
        </div>
    );
};

export default Comp04ClickButtonPage;
