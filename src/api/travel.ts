import { post } from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import { TravelListType } from '@/types/api/travel';

export const getTravelList = () =>
    post<ResponseData<TravelListType>>('/h5/travel/list');
