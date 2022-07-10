import { post } from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import {
    TravelListType,
    TravelListParams,
    TravelDetailType,
} from '@/types/api/travel';

export const getTravelList = (params: TravelListParams) =>
    post<ResponseData<TravelListType>>('/h5/travel/list', params);

export const getTravelDetail = (id: string) =>
    post<ResponseData<TravelDetailType>>('/h5/travel/detail', { id });
