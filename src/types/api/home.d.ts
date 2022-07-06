/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */

export interface CourseListItem {
    course_id: string; //  string: 会员礼遇活动ID
    start_index: number; //  int:  天枢，天璇，天玑，天权，玉衡，开阳，瑶光
    start_time: string; // string
    start_content: string; // string
    start_image: string; // string
    star_icon: string; // string
    created_at: number; // string
    updated_at: number; // string
}
export interface CourseListType {
    total: number;
    list: CourseListItem[];
}

export interface ListParamsType {
    page: number;
    size: number;
}
