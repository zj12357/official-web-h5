/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { CommonList, LanguageItemType } from '@/types/api/common';
export interface CourseListItem {
    course_id: string;
    start_index: number;
    start_time: string;
    start_content: LanguageItemType;
    start_image: string;
    star_icon: string;
    created_at: number;
    updated_at: number;
}
export type CourseListType = CommonList<CourseListItem>;

export interface PromoListItem {
    brief: LanguageItemType;
    content: LanguageItemType;
    content_image_h5: LanguageItemType;
    content_image_pc: LanguageItemType;
    cover_image_h5: LanguageItemType;
    cover_image_pc: LanguageItemType;
    created_at: number;
    index: number;
    promo_end: number;
    promo_id: string;
    promo_start: number;
    title: LanguageItemType;
    updated_at: number;
}
export type PromoListType = CommonList<PromoListItem>;

export interface NewsInfoType {
    news_id: string;
    index: number;
    title: LanguageItemType;
    brief: LanguageItemType;
    content: LanguageItemType;
    cover_image_pc: string;
    content_image_pc: string;
    cover_image_h5: string;
    content_image_h5: string;
    created_at: number;
    updated_at: number;
}
