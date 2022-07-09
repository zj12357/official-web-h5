import { CommonList, LanguageItemType } from '@/types/api/common';

export interface ShoppingListItem {
    address: string;
    content_images: string;
    created_at: number;
    description: LanguageItemType;
    index: number;
    kind: string;
    name: LanguageItemType;
    open_time: string;
    parent_index: number;
    parent_travel_name: string;
    shopping_id: string;
    tel: string;
    updated_at: number;
    cover_image_h5: string;
}

export type ShoppingListType = CommonList<ShoppingListItem>;

export interface ShoppingListParams {
    page?: number;
    size?: number;
    kind?: number;
}
