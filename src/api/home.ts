import { post } from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import {
    CourseListType,
    PromoListType,
    NewsInfoListType,
} from '@/types/api/home';

export const getCourseList = () =>
    post<ResponseData<CourseListType>>('/h5/course/list');

export const getPromoList = () =>
    post<ResponseData<PromoListType>>('/h5/promo/list');

export const getNewsInfo = () =>
    post<ResponseData<NewsInfoListType>>('/h5/news/list');
