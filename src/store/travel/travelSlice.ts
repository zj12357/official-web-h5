/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getTravelList } from '@/api/travel';
import { TravelState } from './types';
import { getLanguage } from '@/common/localization';
import { TravelListParams } from '@/types/api/travel';

const initialState: TravelState = {
    travelList: [],
    hasMore: false,
};

export const storeTraveList = createAsyncThunk(
    'travel/fetchTrave',
    async (params: TravelListParams) => {
        const response = await getTravelList(params);
        console.log('travel/fetchTrave', response.data);
        return response.data;
    },
);

export const travelSlice = createSlice({
    name: 'travel',
    initialState,

    reducers: {},

    //extraReducers 处理接口状态，一般是列表加载，loading状态获取，加载成功，加载失败
    extraReducers: (builder) => {
        builder
            //fetchCourse
            .addCase(storeTraveList.pending, (state) => {
                state.hasMore = true;
            })
            .addCase(storeTraveList.fulfilled, (state, action) => {
                state.travelList = state.travelList.concat(
                    (action.payload?.list ?? []).map((item) => {
                        const newItem = {
                            title: item.travel_name?.[getLanguage()] ?? '',
                            image: item.cover_image_h5 ?? '',
                        };

                        return newItem;
                    }),
                );
                if ((action.payload?.list ?? []).length === 0) {
                    state.hasMore = false;
                }
            })
            .addCase(storeTraveList.rejected, (state, action) => {
                state.hasMore = false;
            });
    },
});

export const selectTravelList = (state: RootState) => state.travel.travelList;
export const selectHasMore = (state: RootState) => state.travel.hasMore;

export default travelSlice.reducer;
