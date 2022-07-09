/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */

export interface StoreHotelCateringListItem {
    title: string;
    image: string;
}

export interface HotelCateringState {
    hotelCateringList: StoreHotelCateringListItem[];
    hasMore: boolean;
}
