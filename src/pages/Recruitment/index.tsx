import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { storeRecruitmentList } from '@/store/recruitment/recruitmentSlice';
import { TopBanner } from '@/components/TopBanner';
import { RecruitmentContent } from './RecruitmentContent';

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
        dispatch(storeRecruitmentList(params));
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
