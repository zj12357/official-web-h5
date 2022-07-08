/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { combineReducers } from '@reduxjs/toolkit';

import commonSlice from './common/commonSlice';
import homeSlice from './home/homeSlice';
import respectedSlice from './respected/respectedSlice';
import newsSlice from './latestNews/latestNewsSlice';
import memberSlice from './member/memberSlice';

const rootReducer = combineReducers({
    home: homeSlice,
    common: commonSlice,
    respected: respectedSlice,
    news: newsSlice,
    member: memberSlice,
});

export default rootReducer;
