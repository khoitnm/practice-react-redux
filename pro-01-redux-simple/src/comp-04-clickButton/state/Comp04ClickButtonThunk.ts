/**
 * This file contains main business logic which orchestrate different state reducers (imported from `xxxSlice` files)
 * This is basically the thunk service.
 */

import { AppThunk } from '../../config/redux/store';
import { setComp04ClickButtonState } from './Comp04ClickButtonSlice';

/**
 * Thunk for Comp04ClickButton logic.
 * @param stringValue
 */
export const thunkComp04ClickButton = (stringValue: string): AppThunk => async (dispatch) => {
    try {
        console.log(`AppThunk: saveStringValue "${stringValue}" start dispatch`);
        dispatch(setComp04ClickButtonState({ stringValue: stringValue }));
        console.log(`AppThunk: saveStringValue "${stringValue}" end dispatch`);
    } catch (err) {
        console.error(`AppThunk: saveStringValue error dispatch` + err, err);
    }
};
