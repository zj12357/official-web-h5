import { CommonList, LanguageItemType } from '@/types/api/common';

export interface HotelCateringListItem {
    catering_cover_image_h5: string;
    catering_description: LanguageItemType;
    catering_name: LanguageItemType;
    hall_cover_image_h5: string;
    hall_icon: string;
    hall_id: string;
    hall_name: LanguageItemType;
    hotel_cover_image_h5: string;
    hotel_description: LanguageItemType;
    hotel_name: LanguageItemType;
}

export type HotelCateringListType = CommonList<HotelCateringListItem>;

export interface HotelCateringListParams {
    page?: number;
    size?: number;
    kind?: number;
}
