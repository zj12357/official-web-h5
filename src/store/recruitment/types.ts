/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */

export interface StoreRecruitmentListItem {
    name: string;
    require: string[];
    salary: string;
    time: string;
}

export interface RecruitmentState {
    recruitmentList: StoreRecruitmentListItem[];
    hasMore: boolean;
}
