/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getNewsList } from '@/api/latestNews';
import { LatestNewsState } from './types';
import { getLanguage } from '@/common/localization';

const initialState: LatestNewsState = {
    newsList: [],
};

export const storeNewsList = createAsyncThunk('news/fetchNews', async () => {
    const response = await getNewsList();
    console.log('news/fetchNews', response.data);
    return response.data;
});

export const newsSlice = createSlice({
    name: 'news',
    initialState,

    reducers: {},

    //extraReducers 处理接口状态，一般是列表加载，loading状态获取，加载成功，加载失败
    extraReducers: (builder) => {
        builder
            //fetchCourse
            .addCase(storeNewsList.pending, (state) => {
                state.newsList = [];
            })
            .addCase(storeNewsList.fulfilled, (state, action) => {
                state.newsList = (action.payload?.list ?? []).map((item) => {
                    const newItem = {
                        title: item.title?.[getLanguage()] ?? '',
                        content: item.content?.[getLanguage()] ?? '',
                        time: '1657265114501' ?? '',
                        imageList: (
                            item.content_image_h5.split('|') ?? []
                        )?.map((img) => {
                            const newImg = {
                                url: img,
                            };
                            return newImg;
                        }),
                    };

                    return newItem;
                });
            })
            .addCase(storeNewsList.rejected, (state, action) => {
                state.newsList = [];
            });
    },
});

export const selectNewsList = (state: RootState) => state.news.newsList;

export default newsSlice.reducer;
