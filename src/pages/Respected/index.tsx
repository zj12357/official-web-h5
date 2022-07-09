import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { stroeHallList } from '@/store/respected/respectedSlice';
import { TopBanner } from '@/components/TopBanner';
import { RespectedContent } from './RespectedContent';
import _ from 'lodash';

type RespectedProps = {};

const Respected: FC<RespectedProps> = (props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [params, setParams] = useState({
        page: 1,
        size: 10,
    });

    const changePage = () => {
        setParams((prev) => ({
            ...prev,
            page: (prev.page += 1),
        }));
    };
    useEffect(() => {
        _.debounce(() => dispatch(stroeHallList(params)), 300)();
    }, [params]);

    return (
        <div>
            <TopBanner
                title={t('top-banner-title-respected')}
                backgroundImage={
                    require('@/assets/images/topBanner/top-banner-respected.png')
                        .default
                }
            ></TopBanner>
            <RespectedContent changePage={changePage}></RespectedContent>
        </div>
    );
};
export default Respected;
