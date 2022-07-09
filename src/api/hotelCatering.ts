import { post } from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import {
    HotelCateringListType,
    HotelCateringListParams,
} from '@/types/api/hotelCatering';

export const geHotelCateringtList = (params: HotelCateringListParams) =>
    post<ResponseData<HotelCateringListType>>('h5/hotel/catering/list', params);
