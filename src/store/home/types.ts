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

export interface HomeState {
    courseList: StroeCourseListItem[];
    promoList: StroePromoListItem[];
}
