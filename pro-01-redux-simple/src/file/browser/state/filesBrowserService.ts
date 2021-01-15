/**
 * This file contains main business logic which orchestrate different state reducers (imported from `xxxSlice` files)
 * This is basically the thunk service.
 */

import { folderClient } from 'file/apiclient/FolderClient';
import { showGlobalError } from 'globalerror/globalErrorSlice';
import { AppThunk } from '../../../config/redux/store';
import { findFilesByParentFolderId } from '../../apiclient/FileClient';
import { setFilesBrowserState } from './filesBrowserSlice';
import IFolder from '../../model/IFolder';

/**
 * Each AppThunk method should call only one dispatch because for each dispatch, the state will be updated,
 * which causes React Component will be executed.
 * Hence the more `dispatch()` execution, the more times React Component will be executed.
 *
 * View more at https://stackoverflow.com/questions/58697073/multiple-times-render-in-react-functional-component-with-hooks
 */
export const openRootFolder = (): AppThunk => async dispatch => {
    try {
        // TODO handle request and state in one dispatch: dispatch(resetGlobalError());
        const parentFolder: IFolder = await folderClient.findRootFolder();
        const files = await findFilesByParentFolderId(parentFolder.id);
        console.log(`AppThunk: openRootFolder ${parentFolder.id} start dispatch`);
        dispatch(setFilesBrowserState({ loadedFiles: files, parentFolder }));
        console.log(`AppThunk: openRootFolder ${parentFolder.id} end dispatch`);
        // dispatch(setParentFolderSuccess(parentFolder));
        // dispatch(setAllFilesSuccess(files));
    } catch (err) {
        console.log(`AppThunk: openRootFolder error dispatch`);
        dispatch(showGlobalError(err.toString()));
    }
};

export const openFolder = (folderId: string): AppThunk => async dispatch => {
    try {
        // TODO handle request and state in one dispatch: dispatch(resetGlobalError());
        const parentFolder: IFolder = await folderClient.findFolderById(folderId);
        const files = await findFilesByParentFolderId(parentFolder.id);
        console.log(`AppThunk: openFolder ${parentFolder.id} start dispatch`);
        dispatch(setFilesBrowserState({ loadedFiles: files, parentFolder }));
        console.log(`AppThunk: openFolder ${parentFolder.id} end dispatch`);

        // dispatch(setParentFolderSuccess(parentFolder));
        // dispatch(setAllFilesSuccess(files));
    } catch (err) {
        console.log(`AppThunk: openRootFolder error dispatch`);
        dispatch(showGlobalError(err.toString()));
    }
};
