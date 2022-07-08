import { post } from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import { RecruitmentListType } from '@/types/api/recruitment';

export const getrRecruitList = () =>
    post<ResponseData<RecruitmentListType>>('/h5/recruit/list');
