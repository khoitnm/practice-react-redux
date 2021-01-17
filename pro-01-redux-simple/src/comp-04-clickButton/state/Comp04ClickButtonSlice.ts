import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * The state of browsing files (including IDocument and IFolder)
 */
type Comp04ClickButtonState = {
    stringValue: string;
};

const initialState: Comp04ClickButtonState = {
    stringValue: 'Init Comp01SimpleUseSelectState',
};

const comp04ClickButtonSlice = createSlice({
    name: 'comp04ClickButtonSlice',
    initialState,
    /**
     * Reducers in `createSlice` could mutate states:
     *  - Ref: https://redux-toolkit.js.org/tutorials/advanced-tutorial#thinking-in-thunks
     *  - "(Remember that these "mutative" assignments are only safe and possible because createSlice uses Immer inside!)"
     */
    reducers: {
        setComp04ClickButtonState(state, action: PayloadAction<Comp04ClickButtonState>) {
            console.log(`Slice: setComp04ClickButtonState "${action.payload.stringValue}"`);
            return action.payload;
        },
    },
});

export const { setComp04ClickButtonState } = comp04ClickButtonSlice.actions;

export default comp04ClickButtonSlice.reducer;
