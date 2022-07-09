import { post } from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import {
    RecruitmentListType,
    RecruitmentListParams,
    RecruitmentDetailType,
} from '@/types/api/recruitment';

export const getrRecruitList = (params: RecruitmentListParams) =>
    post<ResponseData<RecruitmentListType>>('/h5/recruit/list', params);

export const getrRecruitDetail = (id: number) =>
    post<ResponseData<RecruitmentDetailType>>('/h5/recruit/detail', { id });
