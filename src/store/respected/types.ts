/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
export interface GameItem {
    gameIcon: string;
    gameName: string;
}
export interface StoreHallListItem {
    icon: string;
    title: string;
    coverImage: string;
    phone: string;
    address: string;
    games: GameItem[];
}
export interface RespectedState {
    hallList: StoreHallListItem[];
    hasMore: boolean;
}
