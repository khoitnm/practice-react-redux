import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * The state of browsing files (including IDocument and IFolder)
 */
type NoRouterState = {
    /**
     * This is the list of loaded files which end users can see them on the Browser.
     *
     * For now, there's no pagination, so we just load all of files inside a parent folder.
     * In the future, when we have pagination,
     * this list will not be all files inside the parentFile, not the list of all children files inside the parentFolder.
     */
    // loadedFiles: IDFile[];
    // parentFolder?: IFolder;
    stringValue: string;
};

const initialState: NoRouterState = {
    // loadedFiles: []
    stringValue: 'Init String Value'
    // parentFolder: createRootFolder()
};

const noRouterSlice = createSlice({
    name: 'files',
    initialState,
    /**
     * Reducers in `createSlice` could mutate states:
     *  - Ref: https://redux-toolkit.js.org/tutorials/advanced-tutorial#thinking-in-thunks
     *  - "(Remember that these "mutative" assignments are only safe and possible because createSlice uses Immer inside!)"
     */
    reducers: {
        /**
         * This method will receive all files from server, and then add them into the state.
         * @param state
         * @param action its payload include all files under the current parentFolder
         */
        // setAllFilesSuccess(state, action: PayloadAction<IDFile[]>) {
        //     state.loadedFiles = action.payload;
        // },
        // setParentFolderSuccess(state, action: PayloadAction<IFolder>) {
        //     state.parentFolder = action.payload;
        // },

        setFilesBrowserState(state, action: PayloadAction<NoRouterState>) {
            console.log(`FilesBrowserSlice.setFilesBrowserState()`);
            return { stringValue: action.payload.stringValue + ' - Saved at ' + new Date().getTime() };
        }
    }
});

export const { setFilesBrowserState } = noRouterSlice.actions;

export default noRouterSlice.reducer;
