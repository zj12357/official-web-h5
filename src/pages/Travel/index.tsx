import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { storeTraveList } from '@/store/travel/travelSlice';
import { TopBanner } from '@/components/TopBanner';
import { TravelContent } from './TravelContent';
import { TravelListParams } from '@/types/api/travel';

type TravelProps = {};

const Travel: FC<TravelProps> = (props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [params, setParams] = useState({
        page: 1,
        size: 1,
        kind: 1,
    });

    const changeKind = (params: TravelListParams) => {
        setParams((prev) => ({
            ...prev,
            ...params,
        }));
    };

    const changePage = () => {
        setParams((prev) => ({
            ...prev,
            page: (prev.page += 1),
        }));
    };
    useEffect(() => {
        dispatch(storeTraveList(params));
    }, [params]);

    return (
        <div>
            <TopBanner
                title={t('top-banner-title-travel')}
                backgroundImage={
                    require('@/assets/images/topBanner/top-banner-travel.png')
                        .default
                }
            ></TopBanner>
            <TravelContent
                changeKind={changeKind}
                changePage={changePage}
            ></TravelContent>
        </div>
    );
};

export default Travel;
