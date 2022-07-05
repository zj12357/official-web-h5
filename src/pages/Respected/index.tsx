import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TopBanner } from '@/components/TopBanner';
import { RespectedContent } from './RespectedContent';

type RespectedProps = {};

const Respected: FC<RespectedProps> = (props) => {
    const { t } = useTranslation();
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
