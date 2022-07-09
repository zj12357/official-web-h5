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
import { NewsListParams } from '@/types/api/latestNews';

const initialState: LatestNewsState = {
    newsList: [],
    hasMore: false,
};

export const storeNewsList = createAsyncThunk(
    'news/fetchNews',
    async (params: NewsListParams) => {
        const response = await getNewsList(params);
        console.log('news/fetchNews', response.data);
        return response.data;
    },
);

export const newsSlice = createSlice({
    name: 'news',
    initialState,

    reducers: {},

    //extraReducers 处理接口状态，一般是列表加载，loading状态获取，加载成功，加载失败
    extraReducers: (builder) => {
        builder
            //fetchCourse
            .addCase(storeNewsList.pending, (state) => {
                state.hasMore = true;
            })
            .addCase(storeNewsList.fulfilled, (state, action) => {
                state.newsList = state.newsList.concat(
                    (action.payload?.list ?? []).map((item) => {
                        const newItem = {
                            title: item.title?.[getLanguage()] ?? '',
                            content: item.content?.[getLanguage()] ?? '',
                            time: '1657265114501' ?? '',
                            imageList: (
                                item.content_image_h5?.split('|') ?? []
                            )?.map((img) => {
                                const newImg = {
                                    url: img,
                                };
                                return newImg;
                            }),
                        };

                        return newItem;
                    }),
                );
                if ((action.payload?.list ?? []).length === 0) {
                    state.hasMore = false;
                }
            })
            .addCase(storeNewsList.rejected, (state, action) => {
                state.hasMore = false;
            });
    },
});

export const selectNewsList = (state: RootState) => state.news.newsList;
export const selectHasMore = (state: RootState) => state.news.hasMore;

export default newsSlice.reducer;
