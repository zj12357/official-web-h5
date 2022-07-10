import { post } from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import {
    HotelCateringListType,
    HotelCateringListParams,
    HotelForhotelListType,
    CateringDetail,
    HotelDetail,
} from '@/types/api/hotelCatering';

export const geHotelCateringtList = (params: HotelCateringListParams) =>
    post<ResponseData<HotelCateringListType>>(
        '/h5/hotel/catering/list',
        params,
    );

export const getForhotelList = () =>
    post<ResponseData<HotelForhotelListType>>(
        '/h5/hotel/catering/listforhotel',
    );

export const geCateringDetail = (id: string) =>
    post<ResponseData<CateringDetail>>('/h5/catering/detail', { id });

export const geHotelDetail = (id: string) =>
    post<ResponseData<HotelDetail>>('/h5/hotel/detail', { id });
