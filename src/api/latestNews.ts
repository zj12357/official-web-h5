import { post } from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import { NewsListType, NewsListParams } from '@/types/api/latestNews';

export const getNewsList = (params: NewsListParams) =>
    post<ResponseData<NewsListType>>('/h5/news/list', params);
