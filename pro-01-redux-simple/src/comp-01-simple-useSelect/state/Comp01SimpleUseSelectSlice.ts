import { createSlice } from '@reduxjs/toolkit';

type Comp01SimpleUseSelectState = {
    stringValue: string;
};

const initialState: Comp01SimpleUseSelectState = {
    stringValue: 'Init Comp01SimpleUseSelectState'
};

const comp01SimpleUseSelectSlice = createSlice({
    name: 'comp01SimpleUseSelectSlice',
    initialState,
    /**
     * Reducers in `createSlice` could mutate states:
     *  - Ref: https://redux-toolkit.js.org/tutorials/advanced-tutorial#thinking-in-thunks
     *  - "(Remember that these "mutative" assignments are only safe and possible because createSlice uses Immer inside!)"
     */
    reducers: {}
});

export default comp01SimpleUseSelectSlice.reducer;
