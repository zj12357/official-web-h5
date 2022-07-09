/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getrRecruitList, getrRecruitDetail } from '@/api/recruitment';
import { RecruitmentState, StoreRecruitmentDetail } from './types';
import { getLanguage } from '@/common/localization';
import { RecruitmentListParams } from '@/types/api/recruitment';

const initialState: RecruitmentState = {
    recruitmentList: [],
    hasMore: false,
    recruitmentDetail: {} as StoreRecruitmentDetail,
};

export const storeRecruitmentList = createAsyncThunk(
    'recruitment/fetchRecruitment',
    async (params: RecruitmentListParams) => {
        const response = await getrRecruitList(params);
        console.log('recruitment/fetchRecruitment', response.data);
        return response.data;
    },
);
export const storeRecruitmenDetail = createAsyncThunk(
    'recruitment/fetchRecruitmentDetail',
    async (id: number) => {
        const response = await getrRecruitDetail(id);
        console.log('recruitment/fetchRecruitmentDetail', response.data);
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
            //fetchRecruitment
            .addCase(storeRecruitmentList.pending, (state) => {
                state.hasMore = true;
            })
            .addCase(storeRecruitmentList.fulfilled, (state, action) => {
                state.recruitmentList = state.recruitmentList.concat(
                    (action.payload?.list ?? []).map((item) => {
                        const newItem = {
                            recruitId: item.recruit_id ?? '',
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
            })
            //fetchRecruitmentDetail
            .addCase(storeRecruitmenDetail.pending, (state) => {})
            .addCase(storeRecruitmenDetail.fulfilled, (state, action) => {
                state.recruitmentDetail = {
                    jobName: action.payload?.job_name?.[getLanguage()] ?? '',
                    jobSalaryContent:
                        `₱${action.payload?.salary_from}-₱${action.payload?.salary_to}`.split(
                            '|',
                        ) ?? [],
                    jobDescriptionContent:
                        action.payload.job_description?.[getLanguage()]?.split(
                            '|',
                        ) ?? [],
                    jobRequirementsContent:
                        action.payload.job_requirements?.[getLanguage()]?.split(
                            '|',
                        ) ?? [],
                };
            })
            .addCase(storeRecruitmenDetail.rejected, (state, action) => {});
    },
});

export const selectRecruitmentList = (state: RootState) =>
    state.recruitment.recruitmentList;
export const selectHasMore = (state: RootState) => state.recruitment.hasMore;
export const selectRecruitmentDetail = (state: RootState) =>
    state.recruitment.recruitmentDetail;

export default recruitmentSlice.reducer;
