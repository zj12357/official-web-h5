import { post } from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import { MemberListType, MemberListParams } from '@/types/api/member';

export const getCourtesyList = (params: MemberListParams) =>
    post<ResponseData<MemberListType>>('/h5/courtesy/list', params);
