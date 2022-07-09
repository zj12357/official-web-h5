/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getCourtesyList } from '@/api/member';
import { MemberState } from './types';
import { getLanguage } from '@/common/localization';

const initialState: MemberState = {
    memberList: [],
};

export const storeMemberList = createAsyncThunk(
    'member/fetchCourtesy',
    async () => {
        const response = await getCourtesyList();
        console.log('member/fetchCourtesy', response.data);
        return response.data;
    },
);

export const memberSlice = createSlice({
    name: 'member',
    initialState,

    reducers: {},

    //extraReducers 处理接口状态，一般是列表加载，loading状态获取，加载成功，加载失败
    extraReducers: (builder) => {
        builder
            //fetchCourse
            .addCase(storeMemberList.pending, (state) => {
                state.memberList = [];
            })
            .addCase(storeMemberList.fulfilled, (state, action) => {
                state.memberList = (action.payload?.list ?? []).map((item) => {
                    const newItem = {
                        title: item.title?.[getLanguage()] ?? '',
                        image: item.cover_image_h5 ?? '',
                    };

                    return newItem;
                });
            })
            .addCase(storeMemberList.rejected, (state, action) => {
                state.memberList = [];
            });
    },
});

export const selectMemberList = (state: RootState) => state.member.memberList;

export default memberSlice.reducer;
