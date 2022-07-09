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
import { MemberListParams } from '@/types/api/member';

const initialState: MemberState = {
    memberList: [],
    hasMore: true,
};

export const storeMemberList = createAsyncThunk(
    'member/fetchCourtesy',
    async (params: MemberListParams) => {
        const response = await getCourtesyList(params);
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
                state.hasMore = true;
            })
            .addCase(storeMemberList.fulfilled, (state, action) => {
                state.memberList = state.memberList.concat(
                    (action.payload?.list ?? []).map((item) => {
                        const newItem = {
                            title: item.title?.[getLanguage()] ?? '',
                            image: item.cover_image_h5 ?? '',
                        };

                        return newItem;
                    }),
                );
            })
            .addCase(storeMemberList.rejected, (state, action) => {
                state.hasMore = false;
            });
    },
});

export const selectMemberList = (state: RootState) => state.member.memberList;
export const selectHasMore = (state: RootState) => state.member.hasMore;

export default memberSlice.reducer;
