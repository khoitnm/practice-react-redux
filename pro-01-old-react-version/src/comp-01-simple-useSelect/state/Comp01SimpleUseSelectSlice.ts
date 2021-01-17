import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Comp01SimpleUseSelectState = {
    stringValue: string;
};

const initialState: Comp01SimpleUseSelectState = {
    stringValue: 'Init Comp01SimpleUseSelectState',
};

const comp01SimpleUseSelectSlice = createSlice({
    name: 'comp01SimpleUseSelectSlice',
    initialState,
    reducers: {
        // In this example, this method is actually will never be called.
        // I just don't know how to avoid TypeScript error when using an empty reducers (this code `reducers: {}` will show error)
        setComp01SimpleUseSelectState(state, action: PayloadAction<Comp01SimpleUseSelectState>) {
            console.log(`Slice: Comp01SimpleUseSelectState "${action.payload.stringValue}"`);
            return action.payload;
        },
    },
});

export default comp01SimpleUseSelectSlice.reducer;
