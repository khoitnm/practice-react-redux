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
    /**
     * Ref: https://redux-toolkit.js.org/tutorials/advanced-tutorial
     *
     * "Traditionally, the last two aspects would be handled via the React-Redux connect API.
     * We'd write a mapState function to retrieve the data and a mapDispatch function to hold the action creators,
     * pass those to connect, get everything as props, and then call this.props.setCurrentPage() to dispatch that action type.
     *
     * However, React-Redux now has a hooks API, which allows us to interact with the store more directly.
     * useSelector lets us read data from the store and subscribe to updates,
     * and useDispatch gives us a reference to the store's dispatch method.
     * We'll use those throughout the rest of this tutorial.
     *
     * First, we'll import the necessary functions, plus the RootState type we declared earlier,
     * and remove the hardcoded default org and repo strings."
     */
    const dispatch = useDispatch();

    /**
     * Ref:
     * - https://reactjs.org/docs/hooks-effect.html
     * - https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
     *
     * "In React class components, the render method itself shouldn’t cause side effects.
     * It would be too early — we typically want to perform our effects after React has updated the (virtual) DOM.
     *
     * This is why in React classes, we put side effects into `componentDidMount` and `componentDidUpdate`.
     * Coming back to our example, here is a React counter class component that updates the document title right after React makes changes to the DOM"
     *
     * "If you’re familiar with React class lifecycle methods,
     * you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined."
     *
     * @example:
     * class SomeComponent extends React {
     *     componentDidMount() {
     *       document.title = `You clicked ${this.state.count} times`;
     *     }
     *     componentDidUpdate() {
     *       document.title = `You clicked ${this.state.count} times`;
     *     }
     *
     *     // 2 above methods are equals to:
     *     useEffect() {
     *         document.title = `You clicked ${this.state.count} times`;
     *     }
     * }
     */
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
