import { post } from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import { CourseListType } from '@/types/api/home';

export const getCourseList = () =>
    post<ResponseData<CourseListType>>('/h5/course/list');
