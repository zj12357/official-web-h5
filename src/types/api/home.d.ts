/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */

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
export interface CourseListType {
    total: number;
    list: CourseListItem[];
}

export interface startcontentType {
    [key: string]: string;
}
