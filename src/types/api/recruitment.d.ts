import { CommonList, LanguageItemType } from '@/types/api/common';

export interface RecruitmentListItem {
    age?: number;
    benefits?: LanguageItemType;
    created_at?: number;
    job_dept?: LanguageItemType;
    job_description?: LanguageItemType;
    job_name?: LanguageItemType;
    job_requirements?: LanguageItemType;
    rd_language?: string;
    recruit_id?: string;
    salary_from?: string;
    salary_to?: string;
    sex?: number;
    updated_at?: number;
    working_time?: string;
}

export type RecruitmentListType = CommonList<RecruitmentListItem>;

export interface RecruitmentListParams {
    page?: number;
    size?: number;
}

export interface RecruitmentDetailType {
    recruit_id?: string;
    job_dept?: LanguageItemType;
    job_name?: LanguageItemType;
    job_description?: LanguageItemType;
    job_requirements?: LanguageItemType;
    sex?: number;
    age?: number;
    rd_language?: string;
    benefits?: LanguageItemType;
    salary_from?: string;
    salary_to?: string;
    working_time?: string;
    created_at?: number;
    updated_at?: number;
}
