import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type GlobalErrorState = {
    message?: string;
};

const initialState: GlobalErrorState = {};

const globalErrorSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
        /**
         * This method will receive addtional files from server, and then add them into the state.
         * @param state
         * @param action its payload include only the additional files under the current parentFilder, NOT ALL files under that parentFolder.
         */
        showGlobalError(state, action: PayloadAction<string>) {
            state.message = action.payload;
        },
        resetGlobalError(state) {
            state.message = undefined;
        }
    }
});

export const { showGlobalError, resetGlobalError } = globalErrorSlice.actions;

export default globalErrorSlice.reducer;
