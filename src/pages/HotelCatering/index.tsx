import React, { FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
    storeHotelCateringList,
    storeForhotelList,
    selectForHotelList,
} from '@/store/hotelCatering/hotelCateringSlice';
import { TopBanner } from '@/components/TopBanner';
import { HotelCateringContent } from './HotelCateringContent';
import { useUpdateEffect } from '@/hooks';
import _ from 'lodash';

type HotelCateringProps = {};

const HotelCatering: FC<HotelCateringProps> = (props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const forHotelList = useSelector(selectForHotelList);
    const [params, setParams] = useState({
        page: 1,
        size: 10,
        id: 1,
    });

    const changeKind = (id: number) => {
        setParams((prev) => ({
            ...prev,
            id,
        }));
    };

    const changePage = (page?: number) => {
        setParams((prev) => ({
            ...prev,
            page: page ?? (prev.page += 1),
        }));
    };

    useUpdateEffect(() => {
        _.debounce(() => dispatch(storeHotelCateringList(params)), 300)();
    }, [params]);

    useEffect(() => {
        dispatch(storeForhotelList());
    }, []);
    useEffect(() => {
        if (forHotelList.length > 0) {
            changeKind(+forHotelList[0].id);
        }
    }, [forHotelList]);

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
