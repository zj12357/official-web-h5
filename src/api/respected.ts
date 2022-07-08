import { post } from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import { HallListType } from '@/types/api/respected';

export const getHallList = () =>
    post<ResponseData<HallListType>>('/h5/hall/list');
