import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { storeNewsList } from '@/store/latestNews/latestNewsSlice';
import { TopBanner } from '@/components/TopBanner';
import { LatestNewsContent } from './LatestNewsContent';
import _ from 'lodash';

type LatestNewsProps = {};

const LatestNews = () => {
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
        _.debounce(() => dispatch(storeNewsList(params)), 300)();
    }, [params]);

    return (
        <div>
            <TopBanner
                title={t('top-banner-title-latest-news')}
                backgroundImage={
                    require('@/assets/images/topBanner/top-banner-latest-news.png')
                        .default
                }
            ></TopBanner>
            <LatestNewsContent changePage={changePage}></LatestNewsContent>
        </div>
    );
};
export default LatestNews;
