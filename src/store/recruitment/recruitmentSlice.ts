/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getrRecruitList } from '@/api/recruitment';
import { RecruitmentState } from './types';
import { getLanguage } from '@/common/localization';

const initialState: RecruitmentState = {
    recruitmentList: [],
};

export const storeRecruitmentList = createAsyncThunk(
    'recruitment/fetchRecruitment',
    async () => {
        const response = await getrRecruitList();
        console.log('recruitment/fetchRecruitment', response.data);
        return response.data;
    },
);

export const recruitmentSlice = createSlice({
    name: 'recruitment',
    initialState,

    reducers: {},

    //extraReducers 处理接口状态，一般是列表加载，loading状态获取，加载成功，加载失败
    extraReducers: (builder) => {
        builder
            //fetchCourse
            .addCase(storeRecruitmentList.pending, (state) => {
                state.recruitmentList = [];
            })
            .addCase(storeRecruitmentList.fulfilled, (state, action) => {
                state.recruitmentList = (action.payload?.list ?? []).map(
                    (item) => {
                        const newItem = {
                            title: item.title[getLanguage()] ?? '',
                            image: item.cover_image_h5 ?? '',
                        };

                        return newItem;
                    },
                );
            })
            .addCase(storeRecruitmentList.rejected, (state, action) => {
                state.recruitmentList = [];
            });
    },
});

export const selectRecruitmentList = (state: RootState) =>
    state.recruitment.recruitmentList;

export default recruitmentSlice.reducer;
