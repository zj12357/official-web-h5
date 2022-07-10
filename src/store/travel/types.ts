/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */

export interface StoreTravelListItem {
    travelId: string;
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

export interface StoreTravelDetail {
    placeName: string;
    placeDescription: string;
    openTime: string;
    address: string;
    placeImageList: placeImageItem[];
    projectImageList: projectImageItem[];
}

export interface TravelState {
    travelList: StoreTravelListItem[];
    hasMore: boolean;
    travelDetal: StoreTravelDetail;
}
