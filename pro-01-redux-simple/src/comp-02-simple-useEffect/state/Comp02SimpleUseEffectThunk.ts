/**
 * This file contains main business logic which orchestrate different state reducers (imported from `xxxSlice` files)
 * This is basically the thunk service.
 */

import { AppThunk } from '../../config/redux/store';
import { setComp02SimpleUseEffectState } from './Comp02SimpleUseEffectSlice';

export const thunkComp02SimpleUseEffect = (stringValue: string): AppThunk => async dispatch => {
    try {
        console.log(`AppThunk: saveStringValue "${stringValue}" start dispatch`);
        dispatch(setComp02SimpleUseEffectState({ stringValue: stringValue }));
        console.log(`AppThunk: saveStringValue "${stringValue}" end dispatch`);
    } catch (err) {
        console.error(`AppThunk: saveStringValue error dispatch` + err, err);
    }
};
