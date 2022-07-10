/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getShoppingList, getShoppingDetail } from '@/api/shopping';
import { ShoppingState, StoreShoppingDetail } from './types';
import { getLanguage } from '@/common/localization';
import { ShoppingListParams } from '@/types/api/shopping';

const initialState: ShoppingState = {
    shoppingList: [],
    hasMore: false,
    shoppingDetail: {} as StoreShoppingDetail,
};

export const storeShoppingList = createAsyncThunk(
    'shopping/fetchShopping',
    async (params: ShoppingListParams) => {
        const response = await getShoppingList(params);
        console.log('shopping/fetchShopping', response.data);
        return response.data;
    },
);
export const storeShoppingDetail = createAsyncThunk(
    'shopping/fetchShoppingDetail',
    async (id: string) => {
        const response = await getShoppingDetail(id);
        console.log('shopping/fetchShoppingDetail', response.data);
        return response.data;
    },
);

export const shoppingSlice = createSlice({
    name: 'shopping',
    initialState,

    reducers: {
        clearTravelList: (state: ShoppingState) => {
            state.hasMore = false;
            state.shoppingList = [];
        },
    },

    //extraReducers 处理接口状态，一般是列表加载，loading状态获取，加载成功，加载失败
    extraReducers: (builder) => {
        builder
            //fetchShopping
            .addCase(storeShoppingList.pending, (state) => {
                state.hasMore = true;
            })
            .addCase(storeShoppingList.fulfilled, (state, action) => {
                state.shoppingList = state.shoppingList.concat(
                    (action.payload?.list ?? []).map((item) => {
                        const newItem = {
                            shoppingId: item?.shopping_id ?? '',
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
            .addCase(storeShoppingList.rejected, (state, action) => {
                state.hasMore = false;
            })
            //fetchShoppingDetail
            .addCase(storeShoppingDetail.pending, (state) => {})
            .addCase(storeShoppingDetail.fulfilled, (state, action) => {
                state.shoppingDetail = {
                    placeName: action.payload?.name?.[getLanguage()] ?? '',
                    placeDescription:
                        action.payload?.description?.[getLanguage()] ?? '',
                    openTime: action.payload?.open_time ?? '',
                    address: action.payload?.address ?? '',
                    placeImageList: (action.payload?.content_images ?? '')
                        .split('|')
                        ?.map((item) => {
                            const newItem = {
                                url: item,
                            };
                            return newItem;
                        }),
                    projectImageList:
                        action.payload?.shopping_project_list?.map((item) => {
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
            .addCase(storeShoppingDetail.rejected, (state, action) => {});
    },
});

export const { clearTravelList } = shoppingSlice.actions;

export const selectShoppingList = (state: RootState) =>
    state.shopping.shoppingList;
export const selectHasMore = (state: RootState) => state.shopping.hasMore;
export const selectShoppingDetail = (state: RootState) =>
    state.shopping.shoppingDetail;

export default shoppingSlice.reducer;
