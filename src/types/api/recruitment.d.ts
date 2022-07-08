import { CommonList, LanguageItemType } from '@/types/api/common';

export interface RecruitmentListItem {
    brief: LanguageItemType;
    content: LanguageItemType;
    content_image_h5: string;
    content_image_pc: string;
    cover_image_h5: string;
    cover_image_pc: string;
    created_at: number;
    index: number;
    news_id: string;
    title: LanguageItemType;
    updated_at: number;
}

export type RecruitmentListType = CommonList<RecruitmentListItem>;
