/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getHallList } from '@/api/respected';
import { RespectedState } from './types';
import { getLanguage } from '@/common/localization';
import { HallListParams } from '@/types/api/respected';

const initialState: RespectedState = {
    hallList: [],
    hasMore: false,
};

export const stroeHallList = createAsyncThunk(
    'respected/fetchHall',
    async (params: HallListParams) => {
        const response = await getHallList(params);
        console.log('respected/fetchHall', response.data);
        return response.data;
    },
);

export const respectedSlice = createSlice({
    name: 'respected',
    initialState,

    reducers: {},

    //extraReducers 处理接口状态，一般是列表加载，loading状态获取，加载成功，加载失败
    extraReducers: (builder) => {
        builder
            //fetchCourse
            .addCase(stroeHallList.pending, (state) => {
                state.hasMore = true;
            })
            .addCase(stroeHallList.fulfilled, (state, action) => {
                state.hallList = state.hallList.concat(
                    (action.payload?.list ?? []).map((item) => {
                        const newItem = {
                            icon: item.icon ?? '',
                            title: item.hall_name?.[getLanguage()] ?? '',
                            coverImage: item.cover_images_h5 ?? '',
                            phone: item.tel ?? '',
                            address: item.address ?? '',
                            games: (item.business_list ?? []).map(
                                (business) => {
                                    const newItem = {
                                        gameIcon: business.icon ?? '',
                                        gameName:
                                            business.description?.[
                                                getLanguage()
                                            ] ?? '',
                                    };
                                    return newItem;
                                },
                            ),
                        };
                        return newItem;
                    }),
                );
                if ((action.payload?.list ?? []).length === 0) {
                    state.hasMore = false;
                }
            })
            .addCase(stroeHallList.rejected, (state, action) => {
                state.hasMore = false;
            });
    },
});

export const selectHallList = (state: RootState) => state.respected.hallList;
export const selectHasMore = (state: RootState) => state.respected.hasMore;

export default respectedSlice.reducer;
