import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { storeTraveList } from '@/store/travel/travelSlice';
import { TopBanner } from '@/components/TopBanner';
import { TravelContent } from './TravelContent';
import _ from 'lodash';

type TravelProps = {};

const Travel: FC<TravelProps> = (props) => {
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
        _.debounce(() => dispatch(storeTraveList(params)), 300)();
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
