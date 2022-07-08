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

export const storeCourseList = createAsyncThunk(
    'home/fetchCourse',
    async () => {
        const response = await getCourseList();
        console.log('home/fetchCourse', response.data);
        return response.data;
    },
);

export const storePromoList = createAsyncThunk('home/fetchPromo', async () => {
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
            .addCase(storeCourseList.pending, (state) => {
                state.courseList = [];
            })
            .addCase(storeCourseList.fulfilled, (state, action) => {
                state.courseList = (action.payload?.list.slice(0, 7) ?? []).map(
                    (item) => {
                        const newItem = {
                            time: item.start_time ?? '',
                            titleList:
                                item.start_content[getLanguage()]?.split('|') ??
                                [],
                            bgImage: item.start_image ?? '',
                            icon: item.star_icon ?? '',
                        };
                        return newItem;
                    },
                );
            })
            .addCase(storeCourseList.rejected, (state, action) => {
                state.courseList = [];
            })
            //fetchPromo
            .addCase(storePromoList.pending, (state) => {
                state.promoList = [];
            })
            .addCase(storePromoList.fulfilled, (state, action) => {
                state.promoList = (action.payload?.list ?? []).map((item) => {
                    const newItem = {
                        coverImage: item.cover_image_h5[getLanguage()] ?? '',
                    };
                    return newItem;
                });
            })
            .addCase(storePromoList.rejected, (state, action) => {
                state.promoList = [];
            });
    },
});

export const selectCourseList = (state: RootState) => state.home.courseList;
export const selectPromoList = (state: RootState) => state.home.promoList;

export default homeSlice.reducer;
