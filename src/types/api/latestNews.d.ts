import { CommonList, LanguageItemType } from '@/types/api/common';

export interface NewsListItem {
    brief: LanguageItemType;
    content: LanguageItemType;
    content_images_h5: string;
    content_images_pc: string;
    cover_image_h5: string;
    cover_image_pc: string;
    created_at: number;
    index: number;
    news_at: number;
    news_id: string;
    title: LanguageItemType;
    updated_at: number;
}

export type NewsListType = CommonList<NewsListItem>;

export interface NewsListParams {
    page?: number;
    size?: number;
}
