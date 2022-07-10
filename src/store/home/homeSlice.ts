/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../';
import { getCourseList, getPromoList, getNewsInfo } from '@/api/home';
import { NewsParams } from '@/types/api/home';
import { HomeState } from './types';
import { getLanguage } from '@/common/localization';

const initialState: HomeState = {
    courseList: [],
    promoList: [],
    newsInfo: [],
    promoHasmore: false,
};

export const storeCourseList = createAsyncThunk(
    'home/fetchCourse',
    async () => {
        const response = await getCourseList();
        console.log('home/fetchCourse', response.data);
        return response.data;
    },
);

export const storePromoList = createAsyncThunk(
    'home/fetchPromo',
    async (params: NewsParams) => {
        const response = await getPromoList(params);
        console.log('home/fetchPromo', response.data);
        return response.data;
    },
);
export const storeNewsInfo = createAsyncThunk(
    'home/fetchNeswInfo',
    async () => {
        const response = await getNewsInfo();
        console.log('home/fetchNeswInfo', response.data);
        return response.data;
    },
);

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
                            time: String(+item?.start_time * 1000) ?? '',
                            titleList:
                                item.start_content?.[getLanguage()]?.split(
                                    '|',
                                ) ?? [],
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
                state.promoHasmore = true;
            })
            .addCase(storePromoList.fulfilled, (state, action) => {
                state.promoList = state.promoList.concat(
                    (action.payload?.list ?? []).map((item) => {
                        const newItem = {
                            coverImage:
                                item.cover_image_h5?.[getLanguage()] ?? '',
                        };
                        return newItem;
                    }),
                );
                if ((action.payload?.list ?? []).length === 0) {
                    state.promoHasmore = false;
                }
            })
            .addCase(storePromoList.rejected, (state, action) => {
                state.promoHasmore = false;
            })
            //fetchNeswInfo
            .addCase(storeNewsInfo.pending, (state) => {
                state.newsInfo = [];
            })
            .addCase(storeNewsInfo.fulfilled, (state, action) => {
                state.newsInfo = (action.payload?.list ?? [])
                    .map((item) => {
                        const newItem = {
                            url: item.cover_image_h5 ?? '',
                            time: String(+item?.news_at * 1000),
                            content: item.content?.[getLanguage()] ?? '',
                        };
                        return newItem;
                    })
                    .slice(0, 5);
            })
            .addCase(storeNewsInfo.rejected, (state, action) => {
                state.newsInfo = [];
            });
    },
});

export const selectCourseList = (state: RootState) => state.home.courseList;
export const selectPromoList = (state: RootState) => state.home.promoList;
export const selectNewsInfo = (state: RootState) => state.home.newsInfo;
export const selectPromoHasmore = (state: RootState) => state.home.promoHasmore;

export default homeSlice.reducer;
