import { CommonList, LanguageItemType } from '@/types/api/common';

export interface BusinessListItem {
    icon: string;
    description: LanguageItemType;
}
export interface HallListItem {
    address: string;
    business_list: LanguageItemType[];
    cover_images_h5: string;
    hall_id: string;
    hall_name: LanguageItemType;
    tel: string;
    icon: string;
}

export type HallListType = CommonList<HallListItem>;

export interface HallListParams {
    page?: number;
    size?: number;
}
