import { post } from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import { MemberListType } from '@/types/api/member';

export const getCourtesyList = () =>
    post<ResponseData<MemberListType>>('/h5/courtesy/list');
