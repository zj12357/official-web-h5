import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TopBanner } from '@/components/TopBanner';
import { ShoppingContent } from './ShoppingContent';

type ShoppingProps = {};

const Shopping: FC<ShoppingProps> = (props) => {
    const { t } = useTranslation();
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
