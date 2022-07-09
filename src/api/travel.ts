import { post } from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import { TravelListType, TravelListParams } from '@/types/api/travel';

export const getTravelList = (params: TravelListParams) =>
    post<ResponseData<TravelListType>>('/h5/travel/list', params);
