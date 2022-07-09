import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { storeRecruitmentList } from '@/store/recruitment/recruitmentSlice';
import { TopBanner } from '@/components/TopBanner';
import { RecruitmentContent } from './RecruitmentContent';
import _ from 'lodash';

type RecruitmentProps = {};

const Recruitment: FC<RecruitmentProps> = (props) => {
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
        _.debounce(() => dispatch(storeRecruitmentList(params)), 300)();
    }, [params]);
    return (
        <div>
            <TopBanner
                title={t('top-banner-title-recruitment')}
                backgroundImage={
                    require('@/assets/images/topBanner/top-banner-recruitment.png')
                        .default
                }
            ></TopBanner>
            <RecruitmentContent changePage={changePage}></RecruitmentContent>
        </div>
    );
};

export default Recruitment;
