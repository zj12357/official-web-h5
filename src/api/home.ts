import { post } from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import {
    CourseListType,
    PromoListType,
    NewsInfoListType,
    NewsParams,
} from '@/types/api/home';

export const getCourseList = () =>
    post<ResponseData<CourseListType>>('/h5/course/list');

export const getPromoList = (params: NewsParams) =>
    post<ResponseData<PromoListType>>('/h5/promo/list', params);

export const getNewsInfo = () =>
    post<ResponseData<NewsInfoListType>>('/h5/news/list');
