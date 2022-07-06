/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../';
import { getCourseList } from '@/api/home';
import { HomeState } from './types';
import { ListParamsType } from '@/types/api/home';

const initialState: HomeState = {
    courseList: [],
};

export const homeCourseList = createAsyncThunk('home/fetchCourse', async () => {
    const response = await getCourseList();
    return response.data;
});

export const homeSlice = createSlice({
    name: 'home',
    initialState,

    reducers: {},

    //extraReducers 处理接口状态，一般是列表加载，loading状态获取，加载成功，加载失败
    extraReducers: (builder) => {
        builder
            .addCase(homeCourseList.pending, (state) => {
                state.courseList = [];
            })
            .addCase(homeCourseList.fulfilled, (state, action) => {
                state.courseList = action.payload?.list ?? [];
            })
            .addCase(homeCourseList.rejected, (state, action) => {
                state.courseList = [];
            });
    },
});

export const selectCourseList = (state: RootState) => state.home.courseList;

export default homeSlice.reducer;
