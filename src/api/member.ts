import { post } from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import { NewsListType } from '@/types/api/latestNews';

export const getCourtesyList = () =>
    post<ResponseData<NewsListType>>('/h5/courtesy/list');
