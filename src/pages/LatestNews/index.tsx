import React from 'react';
import { useTranslation } from 'react-i18next';
import { TopBanner } from '@/components/TopBanner';
import { LatestNewsContent } from './LatestNewsContent';

type LatestNewsProps = {};

const LatestNews = () => {
    const { t } = useTranslation();
    return (
        <div>
            <TopBanner
                title={t('top-banner-title-latest-news')}
                backgroundImage={
                    require('@/assets/images/topBanner/top-banner-latest-news.png')
                        .default
                }
            ></TopBanner>
            <LatestNewsContent></LatestNewsContent>
        </div>
    );
};
export default LatestNews;
