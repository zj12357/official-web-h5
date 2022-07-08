import { post } from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import { ShoppingListType } from '@/types/api/shopping';

export const getShoppingList = () =>
    post<ResponseData<ShoppingListType>>('/h5/shopping/list');
