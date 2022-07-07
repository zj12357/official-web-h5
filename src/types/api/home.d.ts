/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { CommonList } from '@/types/api/common';
export interface CourseListItem {
    course_id: string;
    start_index: number;
    start_time: string;
    start_content: any;
    start_image: string;
    star_icon: string;
    created_at: number;
    updated_at: number;
}
export type CourseListType = CommonList<CourseListItem>;

export interface PromoListItem {
    brief: any;
    content: any;
    content_image_h5: any;
    content_image_pc: any;
    cover_image_h5: any;
    cover_image_pc: any;
    created_at: number;
    index: number;
    promo_end: number;
    promo_id: string;
    promo_start: number;
    title: any;
    updated_at: number;
}
export type PromoListType = CommonList<PromoListItem>;
