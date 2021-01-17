/**
 * This file contains main business logic which orchestrate different state reducers (imported from `xxxSlice` files)
 * This is basically the thunk service.
 */

import { AppThunk } from '../../config/redux/store';
import { setComp03UseEffectUseSelectorState } from './Comp03UseEffectUseSelectorSlice';

export const thunkComp03UseEffectUseSelector = (stringValue: string): AppThunk => async (dispatch) => {
    try {
        console.log(`AppThunk: saveStringValue "${stringValue}" start dispatch`);
        dispatch(setComp03UseEffectUseSelectorState({ stringValue: stringValue }));
        console.log(`AppThunk: saveStringValue "${stringValue}" end dispatch`);
    } catch (err) {
        console.error(`AppThunk: saveStringValue error dispatch` + err, err);
    }
};
