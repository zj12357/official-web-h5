/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getTravelList, getTravelDetail } from '@/api/travel';
import { TravelState, StoreTravelDetail } from './types';
import { getLanguage } from '@/common/localization';
import { TravelListParams } from '@/types/api/travel';

const initialState: TravelState = {
    travelList: [],
    hasMore: false,
    travelDetal: {} as StoreTravelDetail,
};

export const storeTraveList = createAsyncThunk(
    'travel/fetchTrave',
    async (params: TravelListParams) => {
        const response = await getTravelList(params);
        console.log('travel/fetchTrave', response.data);
        return response.data;
    },
);

export const storeTraveDetail = createAsyncThunk(
    'travel/fetchTraveDetail',
    async (id: string) => {
        const response = await getTravelDetail(id);
        console.log('travel/fetchTraveDetail', response.data);
        return response.data;
    },
);

export const travelSlice = createSlice({
    name: 'travel',
    initialState,

    reducers: {
        clearTravelList: (state: TravelState) => {
            state.hasMore = false;
            state.travelList = [];
        },
    },

    //extraReducers 处理接口状态，一般是列表加载，loading状态获取，加载成功，加载失败
    extraReducers: (builder) => {
        builder
            //fetchTrave
            .addCase(storeTraveList.pending, (state) => {
                state.hasMore = true;
            })
            .addCase(storeTraveList.fulfilled, (state, action) => {
                state.travelList = state.travelList.concat(
                    (action.payload?.list ?? []).map((item) => {
                        const newItem = {
                            travelId: item.travel_service_id,
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
            })
            //fetchTraveDetail
            .addCase(storeTraveDetail.pending, (state) => {})
            .addCase(storeTraveDetail.fulfilled, (state, action) => {
                state.travelDetal = {
                    placeName:
                        action.payload?.travel_name?.[getLanguage()] ?? '',
                    placeDescription:
                        action.payload?.description?.[getLanguage()] ?? '',
                    openTime: action.payload?.open_time ?? '',
                    address: action.payload?.travel_address ?? '',
                    placeImageList: (action.payload?.content_images ?? '')
                        .split('|')
                        ?.map((item) => {
                            const newItem = {
                                url: item,
                            };
                            return newItem;
                        }),
                    projectImageList:
                        action.payload?.travel_project_list?.map((item) => {
                            const newItem = {
                                list: (item?.content_images ?? '')
                                    .split('|')
                                    ?.map((img) => {
                                        const newImg = {
                                            url: img,
                                        };
                                        return newImg;
                                    }),
                            };
                            return newItem;
                        }) ?? [],
                };
            })
            .addCase(storeTraveDetail.rejected, (state, action) => {});
    },
});

export const { clearTravelList } = travelSlice.actions;

export const selectTravelList = (state: RootState) => state.travel.travelList;
export const selectHasMore = (state: RootState) => state.travel.hasMore;
export const selectTravelDetail = (state: RootState) =>
    state.travel.travelDetal;

export default travelSlice.reducer;
