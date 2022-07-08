import { CommonList, LanguageItemType } from '@/types/api/common';

export interface ShoppingListItem {
    address: LanguageItemType;
    content_images: string;
    created_at: number;
    description: string;
    index: number;
    kind: string;
    name: LanguageItemType;
    open_time: string;
    parent_index: number;
    parent_travel_name: string;
    shopping_id: number;
    tel: string;
    updated_at: number;
}

export type ShoppingListType = CommonList<ShoppingListItem>;
