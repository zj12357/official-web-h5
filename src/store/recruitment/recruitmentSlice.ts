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
import { RecruitmentListParams } from '@/types/api/recruitment';

const initialState: RecruitmentState = {
    recruitmentList: [],
    hasMore: false,
};

export const storeRecruitmentList = createAsyncThunk(
    'recruitment/fetchRecruitment',
    async (params: RecruitmentListParams) => {
        const response = await getrRecruitList(params);
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
                state.hasMore = true;
            })
            .addCase(storeRecruitmentList.fulfilled, (state, action) => {
                state.recruitmentList = state.recruitmentList.concat(
                    (action.payload?.list ?? []).map((item) => {
                        const newItem = {
                            name: item.job_name?.[getLanguage()] ?? '',
                            require:
                                item.job_requirements?.[getLanguage()]?.split(
                                    '|',
                                ) ?? [],
                            salary: `₱${item.salary_from}-₱${item.salary_to}`,

                            time: item.working_time,
                        };

                        return newItem;
                    }),
                );
                if ((action.payload?.list ?? []).length === 0) {
                    state.hasMore = false;
                }
            })
            .addCase(storeRecruitmentList.rejected, (state, action) => {
                state.hasMore = false;
            });
    },
});

export const selectRecruitmentList = (state: RootState) =>
    state.recruitment.recruitmentList;
export const selectHasMore = (state: RootState) => state.recruitment.hasMore;

export default recruitmentSlice.reducer;
