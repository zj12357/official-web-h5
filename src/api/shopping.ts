import { post } from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import { ShoppingListType, ShoppingListParams } from '@/types/api/shopping';

export const getShoppingList = (params: ShoppingListParams) =>
    post<ResponseData<ShoppingListType>>('/h5/shopping/list', params);
