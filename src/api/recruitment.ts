import { post } from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import {
    RecruitmentListType,
    RecruitmentListParams,
} from '@/types/api/recruitment';

export const getrRecruitList = (params: RecruitmentListParams) =>
    post<ResponseData<RecruitmentListType>>('/h5/recruit/list', params);
