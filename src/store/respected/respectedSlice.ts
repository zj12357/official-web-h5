/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getHallList } from '@/api/respected';
import { RespectedState } from './types';
import { getLanguage } from '@/common/localization';

const initialState: RespectedState = {
    hallList: [],
};

export const respectedCourseList = createAsyncThunk(
    'respected/fetchHall',
    async () => {
        const response = await getHallList();
        console.log('respected/fetchHall', response.data);
        return response.data;
    },
);

export const respectedSlice = createSlice({
    name: 'respected',
    initialState,

    reducers: {},

    //extraReducers 处理接口状态，一般是列表加载，loading状态获取，加载成功，加载失败
    extraReducers: (builder) => {
        builder
            //fetchCourse
            .addCase(respectedCourseList.pending, (state) => {
                state.hallList = [];
            })
            .addCase(respectedCourseList.fulfilled, (state, action) => {
                state.hallList = action.payload?.list;
            })
            .addCase(respectedCourseList.rejected, (state, action) => {
                state.hallList = [];
            });
    },
});

export const selectHallList = (state: RootState) => state.respected.hallList;

export default respectedSlice.reducer;
