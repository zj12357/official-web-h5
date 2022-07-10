import { CommonList, LanguageItemType } from '@/types/api/common';

export interface HotelCateringListItem {
    id: string;
    name: LanguageItemType;
    cover_image_h5: string;
    category: number; // 1. 酒店 2. 餐饮
}

export type HotelCateringListType = CommonList<HotelCateringListItem>;

export interface HotelCateringListParams {
    page?: number;
    size?: number;
    id?: number;
}

export interface HotelForhotelListItem {
    hall_id: string;
    hall_name: LanguageItemType;
    icon: string;
}

export type HotelForhotelListType = HotelForhotelListItem[];

export interface FoodItem {
    foods_id: string;
    foods_type: LanguageItemType;
    cuisine: LanguageItemType;
    content_images: string;
}

export interface CateringDetail {
    catering_id: string;
    catering_name: LanguageItemType;
    description: LanguageItemType;
    hall_id: string;
    hall_name: LanguageItemType;
    starts: number;
    address: string;
    tel: string;
    is_inside: number;
    cover_images_pc: string;
    content_images_pc: string;
    cover_images_h5: string;
    content_images_h5: string;
    breakfast_at: string;
    lunch_at: string;
    dinner_at: string;
    created_at: number;
    updated_at: number;
    food_list: FoodItem[];
}

export interface roomSchemaItem {
    rooms_id: string;
    rooms_type: LanguageItemType;
    rooms_size: number;
    description: LanguageItemType;
    cover_image_h5: string;
    content_images_h5: string;
}

export interface HotelDetail {
    hotel_id: string;
    hotel_name: LanguageItemType;
    description: LanguageItemType;
    address: string;
    stars: number;
    tel: string;
    is_inside: number;
    cover_image_h5: string;
    room_schema: roomSchemaItem[];
}
