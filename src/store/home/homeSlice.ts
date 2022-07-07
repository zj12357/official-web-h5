/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../';
import { getCourseList, getPromoList } from '@/api/home';
import { HomeState } from './types';
import { getLanguage } from '@/common/localization';

const initialState: HomeState = {
    courseList: [],
    promoList: [],
};

export const homeCourseList = createAsyncThunk('home/fetchCourse', async () => {
    const response = await getCourseList();
    console.log('home/fetchCourse', response.data);
    return response.data;
});

export const homePromoList = createAsyncThunk('home/fetchPromo', async () => {
    const response = await getPromoList();
    console.log('home/fetchPromo', response.data);
    return response.data;
});

export const homeSlice = createSlice({
    name: 'home',
    initialState,

    reducers: {},

    //extraReducers 处理接口状态，一般是列表加载，loading状态获取，加载成功，加载失败
    extraReducers: (builder) => {
        builder
            //fetchCourse
            .addCase(homeCourseList.pending, (state) => {
                state.courseList = [];
            })
            .addCase(homeCourseList.fulfilled, (state, action) => {
                state.courseList = (action.payload?.list.slice(0, 7) ?? []).map(
                    (item) => {
                        item.start_content =
                            item.start_content[getLanguage()]?.split('|') ?? [];
                        return { ...item };
                    },
                );
            })
            .addCase(homeCourseList.rejected, (state, action) => {
                state.courseList = [];
            })
            //fetchPromo
            .addCase(homePromoList.pending, (state) => {
                state.promoList = [];
            })
            .addCase(homePromoList.fulfilled, (state, action) => {
                state.promoList = (action.payload?.list ?? []).map((item) => {
                    item.cover_image_h5 =
                        item.cover_image_h5[getLanguage()] ?? '';
                    return { ...item };
                });
            })
            .addCase(homePromoList.rejected, (state, action) => {
                state.promoList = [];
            });
    },
});

export const selectCourseList = (state: RootState) => state.home.courseList;
export const selectPromoList = (state: RootState) => state.home.promoList;

export default homeSlice.reducer;
