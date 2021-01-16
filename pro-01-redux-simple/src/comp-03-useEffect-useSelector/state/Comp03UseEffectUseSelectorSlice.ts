import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * The state of browsing files (including IDocument and IFolder)
 */
type Comp03UseEffectUseSelectorState = {
    stringValue: string;
};

const initialState: Comp03UseEffectUseSelectorState = {
    stringValue: 'Init Comp01SimpleUseSelectState'
};

const comp03UseEffectUseSelectorSlice = createSlice({
    name: 'comp03UseEffectUseSelectorSlice',
    initialState,
    /**
     * Reducers in `createSlice` could mutate states:
     *  - Ref: https://redux-toolkit.js.org/tutorials/advanced-tutorial#thinking-in-thunks
     *  - "(Remember that these "mutative" assignments are only safe and possible because createSlice uses Immer inside!)"
     */
    reducers: {
        setComp03UseEffectUseSelectorState(state, action: PayloadAction<Comp03UseEffectUseSelectorState>) {
            console.log(`Slice: setComp03UseEffectUseSelectorState "${action.payload.stringValue}"`);
            return { stringValue: action.payload.stringValue + ' - changed at ' + new Date().getTime() };
        }
    }
});

export const { setComp03UseEffectUseSelectorState } = comp03UseEffectUseSelectorSlice.actions;

export default comp03UseEffectUseSelectorSlice.reducer;
