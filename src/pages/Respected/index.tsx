import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { respectedCourseList } from '@/store/respected/respectedSlice';
import { TopBanner } from '@/components/TopBanner';
import { RespectedContent } from './RespectedContent';

type RespectedProps = {};

const Respected: FC<RespectedProps> = (props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(respectedCourseList());
    }, []);

    return (
        <div>
            <TopBanner
                title={t('top-banner-title-respected')}
                backgroundImage={
                    require('@/assets/images/topBanner/top-banner-respected.png')
                        .default
                }
            ></TopBanner>
            <RespectedContent></RespectedContent>
        </div>
    );
};
export default Respected;
