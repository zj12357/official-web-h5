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

const initialState: TravelState = {
    travelList: [],
};

export const storeTraveList = createAsyncThunk(
    'travel/fetchTrave',
    async () => {
        const response = await getTravelList();
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
                state.travelList = [];
            })
            .addCase(storeTraveList.fulfilled, (state, action) => {
                state.travelList = (action.payload?.list ?? []).map((item) => {
                    const newItem = {
                        title: item.title[getLanguage()] ?? '',
                        image: item.cover_image_h5 ?? '',
                    };

                    return newItem;
                });
            })
            .addCase(storeTraveList.rejected, (state, action) => {
                state.travelList = [];
            });
    },
});

export const selectTravelList = (state: RootState) => state.travel.travelList;

export default travelSlice.reducer;
