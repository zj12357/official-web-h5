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
import newsSlice from './latestNews/latestNews';

const rootReducer = combineReducers({
    home: homeSlice,
    common: commonSlice,
    respected: respectedSlice,
    news: newsSlice,
});

export default rootReducer;
