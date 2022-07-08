import { CommonList } from '@/types/api/common';

export interface HallListItem {
    brief: any;
    content: any;
    content_image_h5: any;
    content_image_pc: any;
    cover_image_h5: any;
    cover_image_pc: any;
    created_at: number;
    index: number;
    promo_end: number;
    promo_id: string;
    promo_start: number;
    title: any;
    updated_at: number;
}
export type HallListType = CommonList<HallListItem>;
