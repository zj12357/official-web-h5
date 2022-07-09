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
