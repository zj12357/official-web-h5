/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { combineReducers } from '@reduxjs/toolkit';

import homeSlice from './home/homeSlice';
import userSlice from './user/userSlice';
import errorScreenSlice from './errorScreen/errorScreenSlice';
import commonSlice from './common/commonSlice';

const rootReducer = combineReducers({
    home: homeSlice,
    user: userSlice,
    errorScreen: errorScreenSlice,
    common: commonSlice,
});

export default rootReducer;
