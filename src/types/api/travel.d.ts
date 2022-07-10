import { CommonList, LanguageItemType } from '@/types/api/common';

export interface TravelListItem {
    content_images: string;
    description: LanguageItemType;
    kind: number;
    open_time: string;
    travel_address: string;
    travel_name: LanguageItemType;
    travel_service_id: string;
    travel_tel: string;
    cover_image_h5: string;
}

export type TravelListType = CommonList<TravelListItem>;

export interface TravelListParams {
    page?: number;
    size?: number;
    kind?: number;
}

export interface TravelProjectItem {
    content_images: string;
    travel_name: LanguageItemType;
    travel_service_id: string;
}

export interface TravelDetailType {
    content_images?: string;
    created_at?: number;
    description?: LanguageItemType;
    index?: number;
    kind?: number;
    open_time?: string;
    parent_index?: 0;
    parent_travel_name?: string;
    travel_address?: string;
    travel_name?: LanguageItemType;
    travel_project_list?: TravelProjectItem[];
    travel_service_id?: string;
    travel_tel?: string;
    updated_at?: number;
}
