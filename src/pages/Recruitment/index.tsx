import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { storeRecruitmentList } from '@/store/recruitment/recruitmentSlice';
import { TopBanner } from '@/components/TopBanner';
import { RecruitmentContent } from './RecruitmentContent';

type RecruitmentProps = {};

const Recruitment: FC<RecruitmentProps> = (props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(storeRecruitmentList());
    }, []);
    return (
        <div>
            <TopBanner
                title={t('top-banner-title-recruitment')}
                backgroundImage={
                    require('@/assets/images/topBanner/top-banner-recruitment.png')
                        .default
                }
            ></TopBanner>
            <RecruitmentContent></RecruitmentContent>
        </div>
    );
};

export default Recruitment;
