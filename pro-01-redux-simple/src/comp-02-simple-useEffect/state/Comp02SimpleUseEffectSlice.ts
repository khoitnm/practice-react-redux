import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * The state of browsing files (including IDocument and IFolder)
 */
type Comp02SimpleUseEffectState = {
    stringValue: string;
};

const initialState: Comp02SimpleUseEffectState = {
    stringValue: 'Init Comp01SimpleUseSelectState',
};

const comp02SimpleUseEffectSlice = createSlice({
    name: 'comp02SimpleUseEffectSlice',
    initialState,
    /**
     * Reducers in `createSlice` could mutate states:
     *  - Ref: https://redux-toolkit.js.org/tutorials/advanced-tutorial#thinking-in-thunks
     *  - "(Remember that these "mutative" assignments are only safe and possible because createSlice uses Immer inside!)"
     */
    reducers: {
        setComp02SimpleUseEffectState(state, action: PayloadAction<Comp02SimpleUseEffectState>) {
            console.log(`Slice: setComp02SimpleUseEffectState "${action.payload.stringValue}"`);
            return action.payload;
        },
    },
});

export const { setComp02SimpleUseEffectState } = comp02SimpleUseEffectSlice.actions;

export default comp02SimpleUseEffectSlice.reducer;
