import React, { FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { storeHotelCateringList } from '@/store/hotelCatering/hotelCateringSlice';
import { TopBanner } from '@/components/TopBanner';
import { HotelCateringContent } from './HotelCateringContent';
import _ from 'lodash';

type HotelCateringProps = {};

const HotelCatering: FC<HotelCateringProps> = (props) => {
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
        _.debounce(() => dispatch(storeHotelCateringList(params)), 300)();
    }, [params]);

    return (
        <div>
            <TopBanner
                title={t('top-banner-title-hotel-catering')}
                backgroundImage={
                    require('@/assets/images/topBanner/top-banner-hotel-catering.png')
                        .default
                }
            ></TopBanner>
            <HotelCateringContent
                changeKind={changeKind}
                changePage={changePage}
            ></HotelCateringContent>
        </div>
    );
};

export default HotelCatering;
