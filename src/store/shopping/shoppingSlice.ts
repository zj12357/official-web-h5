/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getShoppingList } from '@/api/shopping';
import { ShoppingState } from './types';
import { getLanguage } from '@/common/localization';
import { ShoppingListParams } from '@/types/api/shopping';

const initialState: ShoppingState = {
    shoppingList: [],
    hasMore: false,
};

export const storeShoppingList = createAsyncThunk(
    'shopping/fetchShopping',
    async (params: ShoppingListParams) => {
        const response = await getShoppingList(params);
        console.log('shopping/fetchShopping', response.data);
        return response.data;
    },
);

export const shoppingSlice = createSlice({
    name: 'shopping',
    initialState,

    reducers: {},

    //extraReducers 处理接口状态，一般是列表加载，loading状态获取，加载成功，加载失败
    extraReducers: (builder) => {
        builder
            //fetchCourse
            .addCase(storeShoppingList.pending, (state) => {
                state.hasMore = true;
            })
            .addCase(storeShoppingList.fulfilled, (state, action) => {
                state.shoppingList = state.shoppingList.concat(
                    (action.payload?.list ?? []).map((item) => {
                        const newItem = {
                            title: item.name?.[getLanguage()] ?? '',
                            image: item.cover_image_h5 ?? '',
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
            });
    },
});

export const selectShoppingList = (state: RootState) =>
    state.shopping.shoppingList;
export const selectHasMore = (state: RootState) => state.shopping.hasMore;

export default shoppingSlice.reducer;
