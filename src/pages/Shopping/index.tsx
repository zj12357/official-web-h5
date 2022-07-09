import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { storeShoppingList } from '@/store/shopping/shoppingSlice';
import { TopBanner } from '@/components/TopBanner';
import { ShoppingContent } from './ShoppingContent';

type ShoppingProps = {};

const Shopping: FC<ShoppingProps> = (props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [params, setParams] = useState({
        page: 1,
        size: 10,
        kind: 1,
    });

    const changeKind = (kind: number) => {
        setParams((prev) => ({
            ...prev,
            kind,
        }));
    };

    const changePage = () => {
        setParams((prev) => ({
            ...prev,
            page: (prev.page += 1),
        }));
    };

    useEffect(() => {
        dispatch(storeShoppingList(params));
    }, [params]);

    return (
        <div>
            <TopBanner
                title={t('top-banner-title-shopping')}
                backgroundImage={
                    require('@/assets/images/topBanner/top-banner-shopping.png')
                        .default
                }
            ></TopBanner>
            <ShoppingContent
                changeKind={changeKind}
                changePage={changePage}
            ></ShoppingContent>
        </div>
    );
};

export default Shopping;
