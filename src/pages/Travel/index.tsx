import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TopBanner } from '@/components/TopBanner';
import { TravelContent } from './TravelContent';

type TravelProps = {};

const Travel: FC<TravelProps> = (props) => {
    const { t } = useTranslation();
    return (
        <div>
            <TopBanner
                title={t('top-banner-title-travel')}
                backgroundImage={
                    require('@/assets/images/topBanner/top-banner-travel.png')
                        .default
                }
            ></TopBanner>
            <TravelContent></TravelContent>
        </div>
    );
};

export default Travel;
