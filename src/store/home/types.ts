/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { CourseListItem, PromoListItem } from '@/types/api/home';
export interface StroeCourseListItem {
    time: string;
    titleList: string[];
    bgImage: string;
    icon: string;
}

export interface StroePromoListItem {
    coverImage: string;
}

export interface NewsInfoImageItem {
    url: string;
    time: string;
    content: string;
}

export interface StoreNewsInfo {
    title: string;
    imageList: NewsInfoImageItem[];
}

export interface HomeState {
    courseList: StroeCourseListItem[];
    promoList: StroePromoListItem[];
    newsInfo: StoreNewsInfo;
}
