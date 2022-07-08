import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { storeTraveList } from '@/store/travel/travelSlice';
import { TopBanner } from '@/components/TopBanner';
import { TravelContent } from './TravelContent';

type TravelProps = {};

const Travel: FC<TravelProps> = (props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(storeTraveList());
    }, []);

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
