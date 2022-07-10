/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import {
    geHotelCateringtList,
    getForhotelList,
    geCateringDetail,
    geHotelDetail,
} from '@/api/hotelCatering';
import {
    HotelCateringState,
    HotelDetailType,
    CateringDetailType,
} from './types';
import { getLanguage } from '@/common/localization';
import { HotelCateringListParams } from '@/types/api/hotelCatering';
import { t } from 'i18next';

const initialState: HotelCateringState = {
    hotelCateringList: [],
    hasMore: false,
    forHotelList: [],
    hotelDetail: {} as HotelDetailType,
    cateringDetail: {} as CateringDetailType,
};

export const storeHotelCateringList = createAsyncThunk(
    'hotelCatering/fetchHotelCatering',
    async (params: HotelCateringListParams) => {
        const response = await geHotelCateringtList(params);
        console.log('hotelCatering/fetchHotelCatering', response.data);
        return response.data;
    },
);

export const storeForhotelList = createAsyncThunk(
    'hotelCatering/fetchForhotelList',
    async () => {
        const response = await getForhotelList();
        console.log('hotelCatering/fetchForhotelList', response.data);
        return response.data;
    },
);

export const storeCateringDetail = createAsyncThunk(
    'hotelCatering/fetchCateringDetail',
    async (id: string) => {
        const response = await geCateringDetail(id);
        console.log('hotelCatering/fetchCateringDetail', response.data);
        return response.data;
    },
);
export const storeHotelDetail = createAsyncThunk(
    'hotelCatering/fetchHotelDetail',
    async (id: string) => {
        const response = await geHotelDetail(id);
        console.log('hotelCatering/fetchHotelDetail', response.data);
        return response.data;
    },
);

export const hotelCateringSlice = createSlice({
    name: 'hotelCatering',
    initialState,

    reducers: {
        clearHotelCateringlList: (state: HotelCateringState) => {
            state.hasMore = false;
            state.hotelCateringList = [];
        },
    },

    //extraReducers 处理接口状态，一般是列表加载，loading状态获取，加载成功，加载失败
    extraReducers: (builder) => {
        builder
            //fetchHotelCatering
            .addCase(storeHotelCateringList.pending, (state) => {
                state.hasMore = true;
            })
            .addCase(storeHotelCateringList.fulfilled, (state, action) => {
                state.hotelCateringList = state.hotelCateringList.concat(
                    (action.payload?.list ?? []).map((item) => {
                        const newItem = {
                            id: item?.id ?? '',
                            category: String(item.category) ?? '',
                            title: item?.name?.[getLanguage()] ?? '',
                            image: item?.cover_image_h5 ?? '',
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
            })
            //fetchForhotelList
            .addCase(storeForhotelList.pending, (state) => {})
            .addCase(storeForhotelList.fulfilled, (state, action) => {
                state.forHotelList = (action.payload ?? []).map((item) => {
                    const newItem = {
                        id: item.hall_id,
                        name: item?.hall_name?.[getLanguage()] ?? '',
                        icon: item?.icon ?? '',
                    };
                    return newItem;
                });
            })
            .addCase(storeForhotelList.rejected, (state, action) => {})
            //fetchCateringDetail
            .addCase(storeCateringDetail.pending, (state) => {})
            .addCase(storeCateringDetail.fulfilled, (state, action) => {
                state.cateringDetail = {
                    cateringName:
                        action.payload?.catering_name?.[getLanguage()] ?? '',
                    stars: action.payload?.starts ?? 0,
                    foodTypeList: (action.payload?.food_list ?? []).map(
                        (item) => {
                            const newItem = `${
                                item?.foods_type?.[getLanguage()] ?? ''
                            }.${item?.cuisine?.[getLanguage()] ?? ''}`;
                            return newItem;
                        },
                    ),
                    cateringDescription:
                        action.payload?.description?.[getLanguage()] ?? '',
                    phone: action.payload?.tel ?? '',
                    openTime: `${action.payload.breakfast_at ?? ''} / ${
                        action.payload.lunch_at ?? ''
                    } / ${action.payload.dinner_at ?? ''}`,
                    address: action.payload.address ?? '',
                    inSide: !!(action.payload?.is_inside ?? 0),
                    cateringImageList: (action.payload?.food_list ?? []).map(
                        (item) => {
                            const newItem = {
                                list: (item.content_images ?? '')
                                    .split('|')
                                    .map((img) => {
                                        const newImg = {
                                            url: img,
                                        };
                                        return newImg;
                                    }),
                            };
                            return newItem;
                        },
                    ),
                };
            })
            .addCase(storeCateringDetail.rejected, (state, action) => {})
            //fetchHotelDetail
            .addCase(storeHotelDetail.pending, (state) => {})
            .addCase(storeHotelDetail.fulfilled, (state, action) => {
                state.hotelDetail = {
                    hotelName:
                        action.payload?.hotel_name?.[getLanguage()] ?? '',
                    stars: action.payload?.stars ?? 0,
                    hotelDescription:
                        action.payload?.description?.[getLanguage()] ?? '',
                    phone: action.payload?.tel ?? '',
                    address: action.payload?.address ?? '',
                    inSide: !!(action.payload?.is_inside ?? 0),
                    hotelImageList: (action.payload.room_schema ?? []).map(
                        (item) => {
                            const newItem = {
                                url: item.cover_image_h5,
                                name: `${
                                    item?.rooms_type?.[getLanguage()] ?? ''
                                } ${item?.rooms_size ?? 0}${t(
                                    'detail-text-square',
                                )}`,
                                content:
                                    item?.description?.[getLanguage()] ?? '',
                            };
                            return newItem;
                        },
                    ),
                };
            })
            .addCase(storeHotelDetail.rejected, (state, action) => {});
    },
});

export const { clearHotelCateringlList } = hotelCateringSlice.actions;

export const selectHotelCateringList = (state: RootState) =>
    state.hotelCatering.hotelCateringList;
export const selectHasMore = (state: RootState) => state.hotelCatering.hasMore;
export const selectForHotelList = (state: RootState) =>
    state.hotelCatering.forHotelList;
export const selectCateringDetail = (state: RootState) =>
    state.hotelCatering.cateringDetail;
export const selectHotelDetail = (state: RootState) =>
    state.hotelCatering.hotelDetail;

export default hotelCateringSlice.reducer;
