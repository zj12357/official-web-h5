import { post } from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import {
    ShoppingListType,
    ShoppingListParams,
    ShoppingDetailType,
} from '@/types/api/shopping';

export const getShoppingList = (params: ShoppingListParams) =>
    post<ResponseData<ShoppingListType>>('/h5/shopping/list', params);

export const getShoppingDetail = (id: string) =>
    post<ResponseData<ShoppingDetailType>>('/h5/shopping/detail', { id });
