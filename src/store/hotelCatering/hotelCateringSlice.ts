/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { geHotelCateringtList } from '@/api/hotelCatering';
import { HotelCateringState } from './types';
import { getLanguage } from '@/common/localization';
import { HotelCateringListParams } from '@/types/api/hotelCatering';

const initialState: HotelCateringState = {
    hotelCateringList: [],
    hasMore: false,
};

export const storeHotelCateringList = createAsyncThunk(
    'hotelCatering/fetchhotelCatering',
    async (params: HotelCateringListParams) => {
        const response = await geHotelCateringtList(params);
        console.log('hotelCatering/fetchhotelCatering', response.data);
        return response.data;
    },
);

export const hotelCateringSlice = createSlice({
    name: 'hotelCatering',
    initialState,

    reducers: {},

    //extraReducers 处理接口状态，一般是列表加载，loading状态获取，加载成功，加载失败
    extraReducers: (builder) => {
        builder
            //fetchCourse
            .addCase(storeHotelCateringList.pending, (state) => {
                state.hasMore = true;
            })
            .addCase(storeHotelCateringList.fulfilled, (state, action) => {
                state.hotelCateringList = state.hotelCateringList.concat(
                    (action.payload?.list ?? []).map((item) => {
                        const newItem = {
                            title: item.hotel_name?.[getLanguage()] ?? '',
                            image: item.hotel_cover_image_h5 ?? '',
                        };

                        return newItem;
                    }),
                );
                if ((action.payload?.list ?? []).length === 0) {
                    state.hasMore = false;
                }
            })
            .addCase(storeHotelCateringList.rejected, (state, action) => {
                state.hasMore = false;
            });
    },
});

export const selectHotelCateringList = (state: RootState) =>
    state.hotelCatering.hotelCateringList;
export const selectHasMore = (state: RootState) => state.hotelCatering.hasMore;

export default hotelCateringSlice.reducer;
