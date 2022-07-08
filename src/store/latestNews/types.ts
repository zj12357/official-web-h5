/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
export interface ImageListItem {
    url: string;
}

export interface storeNewsListItem {
    title: string;
    content: string;
    time: string;
    imageList: ImageListItem[];
}

export interface RespectedState {
    newsList: storeNewsListItem[];
}
