/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */

export interface StoreRecruitmentListItem {
    recruitId: string;
    name: string;
    require: string[];
    salary: string;
    time: string;
}

export interface StoreRecruitmentDetail {
    jobName: string;
    jobSalaryContent: string[];
    jobDescriptionContent: string[];
    jobRequirementsContent: string[];
}

export interface RecruitmentState {
    recruitmentList: StoreRecruitmentListItem[];
    hasMore: boolean;
    recruitmentDetail: StoreRecruitmentDetail;
}
