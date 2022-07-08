import { CommonList, LanguageItemType } from '@/types/api/common';

export interface HallListItem {
    TempDescription: string;
    address: string;
    content_images_h5: string;
    cover_images_h5: string;
    description: any[];
    hall_id: string;
    hall_name: LanguageItemType;
    icon: string;
    index: number;
    tel: string;
}
export type HallListType = CommonList<HallListItem>;
