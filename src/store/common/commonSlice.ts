/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { CommonState } from './types';

const initialState: CommonState = {
    scrollTop: 0,
    navMenuOpen: false,
    langMenuOpen: false,
    timeLocale: 'zh-cn',
};

export const commonSlice = createSlice({
    name: 'common',
    initialState,

    reducers: {
        setScrollTop: (state: CommonState, action: PayloadAction<number>) => {
            state.scrollTop = action.payload;
        },
        setNavMenuOpen: (
            state: CommonState,
            action: PayloadAction<boolean>,
        ) => {
            state.navMenuOpen = action.payload;
        },
        setLangMenuOpen: (
            state: CommonState,
            action: PayloadAction<boolean>,
        ) => {
            state.langMenuOpen = action.payload;
        },
        setTimeLocale: (state: CommonState, action: PayloadAction<string>) => {
            state.timeLocale = action.payload;
        },
    },
});

export const { setScrollTop, setNavMenuOpen, setLangMenuOpen, setTimeLocale } =
    commonSlice.actions;

export const selectScrollTop = (state: RootState) => state.common.scrollTop;
export const selectNavMenuOpen = (state: RootState) => state.common.navMenuOpen;
export const selectLangMenuOpen = (state: RootState) =>
    state.common.langMenuOpen;
export const selectTimeLocale = (state: RootState) => state.common.timeLocale;

export default commonSlice.reducer;
