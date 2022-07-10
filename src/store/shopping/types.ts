/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */

export interface StoreShoppingListItem {
    shoppingId: string;
    title: string;
    image: string;
}

export interface placeImageItem {
    url: string;
}

export interface projectImageItem {
    list: ImageItem[];
}

interface ImageItem {
    url: string;
}

export interface StoreShoppingDetail {
    placeName: string;
    placeDescription: string;
    openTime: string;
    address: string;
    placeImageList: placeImageItem[];
    projectImageList: projectImageItem[];
}

export interface ShoppingState {
    shoppingList: StoreShoppingListItem[];
    hasMore: boolean;
    shoppingDetail: StoreShoppingDetail;
}
