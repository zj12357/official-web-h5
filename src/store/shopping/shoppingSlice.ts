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

const initialState: ShoppingState = {
    shoppingList: [],
};

export const storeShoppingList = createAsyncThunk(
    'shopping/fetchShopping',
    async () => {
        const response = await getShoppingList();
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
                state.shoppingList = [];
            })
            .addCase(storeShoppingList.fulfilled, (state, action) => {
                state.shoppingList = (action.payload?.list ?? []).map(
                    (item) => {
                        const newItem = {
                            title: item.name[getLanguage()] ?? '',
                            image: item.content_images ?? '',
                        };

                        return newItem;
                    },
                );
            })
            .addCase(storeShoppingList.rejected, (state, action) => {
                state.shoppingList = [];
            });
    },
});

export const selectShoppingList = (state: RootState) =>
    state.shopping.shoppingList;

export default shoppingSlice.reducer;
