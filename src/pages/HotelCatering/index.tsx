import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TopBanner } from '@/components/TopBanner';
import { HotelCateringContent } from './HotelCateringContent';

type HotelCateringProps = {};

const HotelCatering: FC<HotelCateringProps> = (props) => {
    const { t } = useTranslation();
    return (
        <div>
            <TopBanner
                title={t('top-banner-title-hotel-catering')}
                backgroundImage={
                    require('@/assets/images/topBanner/top-banner-hotel-catering.png')
                        .default
                }
            ></TopBanner>
            <HotelCateringContent></HotelCateringContent>
        </div>
    );
};

export default HotelCatering;
