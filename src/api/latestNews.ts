import { post } from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import { NewsListType } from '@/types/api/latestNews';

export const getNewsList = () =>
    post<ResponseData<NewsListType>>('/h5/news/list');
