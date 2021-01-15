/**
 * This file contains main business logic which orchestrate different state reducers (imported from `xxxSlice` files)
 * This is basically the thunk service.
 */

import { AppThunk } from '../../../config/redux/store';
import { setFilesBrowserState } from './filesBrowserSlice';

export const saveStringValue = (stringValue: string): AppThunk => async dispatch => {
    try {
        console.log(`AppThunk: openFolder ${stringValue} start dispatch`);
        dispatch(setFilesBrowserState({ stringValue: stringValue }));
        console.log(`AppThunk: openFolder ${stringValue} end dispatch`);
    } catch (err) {
        console.error(`AppThunk: openRootFolder error dispatch` + err, err);
    }
};
