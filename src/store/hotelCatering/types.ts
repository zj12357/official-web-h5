/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */

import { StringNullableChain } from 'lodash';

export interface StoreHotelCateringListItem {
    id: string;
    category: string;
    title: string;
    image: string;
}

export interface forHotelItem {
    name: string;
    icon: string;
    id: string;
}

export interface hotelImageItem {
    url: string;
    name: string;
    content: string;
}
export interface HotelDetailType {
    hotelName: string;
    stars: number;
    hotelDescription: string;
    phone: string;
    address: string;
    inSide: boolean;
    hotelImageList: hotelImageItem[];
}

export interface FoodImageItem {
    url: string;
}
export interface CateringImageItem {
    list: FoodImageItem[];
}

export interface CateringDetailType {
    cateringName: string;
    stars: number;
    foodTypeList: string[];
    cateringDescription: string;
    phone: string;
    openTime: string;
    address: string;
    inSide: boolean;
    cateringImageList: CateringImageItem[];
}

export interface HotelCateringState {
    hotelCateringList: StoreHotelCateringListItem[];
    hasMore: boolean;
    forHotelList: forHotelItem[];
    hotelDetail: HotelDetailType;
    cateringDetail: CateringDetailType;
}
