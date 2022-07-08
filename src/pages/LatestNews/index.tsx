import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { storeNewsList } from '@/store/latestNews/latestNewsSlice';
import { TopBanner } from '@/components/TopBanner';
import { LatestNewsContent } from './LatestNewsContent';

type LatestNewsProps = {};

const LatestNews = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(storeNewsList());
    }, []);

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
