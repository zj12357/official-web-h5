import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { storeShoppingList } from '@/store/shopping/shoppingSlice';
import { TopBanner } from '@/components/TopBanner';
import { ShoppingContent } from './ShoppingContent';

type ShoppingProps = {};

const Shopping: FC<ShoppingProps> = (props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(storeShoppingList());
    }, []);

    return (
        <div>
            <TopBanner
                title={t('top-banner-title-shopping')}
                backgroundImage={
                    require('@/assets/images/topBanner/top-banner-shopping.png')
                        .default
                }
            ></TopBanner>
            <ShoppingContent></ShoppingContent>
        </div>
    );
};

export default Shopping;
