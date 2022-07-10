/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
export interface StroeCourseListItem {
    time: string;
    titleList: string[];
    bgImage: string;
    icon: string;
}

export interface StroePromoListItem {
    coverImage: string;
}

export interface StoreNewsInfoListItem {
    url: string;
    time: string;
    content: string;
}

export interface HomeState {
    courseList: StroeCourseListItem[];
    promoList: StroePromoListItem[];
    newsInfo: StoreNewsInfoListItem[];
    promoHasmore: boolean;
}
