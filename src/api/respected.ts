import { post } from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import { HallListType, HallListParams } from '@/types/api/respected';

export const getHallList = (params: HallListParams) =>
    post<ResponseData<HallListType>>('/h5/hall/list', params);
