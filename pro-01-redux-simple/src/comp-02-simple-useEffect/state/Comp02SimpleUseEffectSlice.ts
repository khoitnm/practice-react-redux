import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * The state of browsing files (including IDocument and IFolder)
 */
type Comp01SimpleUseSelectState = {
    stringValue: string;
};

const initialState: Comp01SimpleUseSelectState = {
    stringValue: 'Init Comp01SimpleUseSelectState'
};

const comp02SimpleUseEffectSlice = createSlice({
    name: 'files',
    initialState,
    /**
     * Reducers in `createSlice` could mutate states:
     *  - Ref: https://redux-toolkit.js.org/tutorials/advanced-tutorial#thinking-in-thunks
     *  - "(Remember that these "mutative" assignments are only safe and possible because createSlice uses Immer inside!)"
     */
    reducers: {
        setComp02SimpleUseEffectState(state, action: PayloadAction<Comp01SimpleUseSelectState>) {
            console.log(`Slice: setComp02SimpleUseEffectState`);
            return { stringValue: action.payload.stringValue + ' - changed at ' + new Date().toLocaleTimeString() };
        }
    }
});

export const { setComp02SimpleUseEffectState } = comp02SimpleUseEffectSlice.actions;

export default comp02SimpleUseEffectSlice.reducer;
