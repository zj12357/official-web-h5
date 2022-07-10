import React, { FC, useEffect } from 'react';
import Swiper from 'swiper';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import dayjs from 'dayjs';
import {
    selectNewsList,
    selectHasMore,
} from '@/store/latestNews/latestNewsSlice';
import PageLoading from '@/components/Loading/PageLoading';
import ImageLazy from '@/components/ImageLazy';
import { useRemovetStyle } from '@/common/dom';

type LatestNewsContentProps = {
    changePage: () => void;
};

export const LatestNewsContent: FC<LatestNewsContentProps> = ({
    changePage,
}) => {
    const { t } = useTranslation();
    useRemovetStyle('infinite-scroll-component', 'style');
    const contentList = useSelector(selectNewsList);
    const hasMore = useSelector(selectHasMore);

    useEffect(() => {
        contentList.forEach((_, index) => {
            const dynamic = new Swiper(`#latest-news-dynamic${index}`, {
                mousewheel: true,
                observer: true,
                observeParents: true,
                speed: 800,
                slidesPerView: 'auto',
                freeMode: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            });
            dynamic.scrollbar.$dragEl.css('background', '#BFA983');
            dynamic.scrollbar.$el.css('height', '3px');
        });
    }, []);

    return (
        <div className="w-full p-[20px] bg-[#181818]">
            <div>
                <InfiniteScroll
                    next={changePage}
                    hasMore={hasMore}
                    dataLength={contentList.length}
                    loader={<PageLoading></PageLoading>}
                    className="w-full pt-[10px]"
                    scrollThreshold={0.58}
                    endMessage={
                        <div className="w-full  mt-[20px]   text-[#FFD78E] text-center text-[14px]">
                            {t('common-no-more')}
                        </div>
                    }
                >
                    {contentList?.map((item, index) => (
                        <div
                            className="w-full py-[20px] not-last-child-border"
                            key={index}
                        >
                            <div className="w-full flex justify-between mt-[10px] mb-[20px] items-center wow animate__animated animate__fadeInUp animate__delay-200ms">
                                <div className="text-[#FFD78E] text-[20px]">
                                    {item.title}
                                </div>
                                <div className="text-[14px] text-[#FFD78E]">
                                    {dayjs(item.time).format('YYYY/MM/DD')}
                                </div>
                            </div>
                            <p className="text-[12px]  text-[#BFA983] wow animate__animated animate__fadeInUp animate__delay-300ms">
                                {item.content}
                            </p>
                            <div
                                className="swiper-container mt-[20px] mb-[10px] wow animate__animated animate__fadeInUp animate__delay-400ms"
                                id={'latest-news-dynamic' + index}
                            >
                                <div className="swiper-wrapper w-full">
                                    {item.imageList?.map((item, iIndex) => (
                                        <div
                                            key={iIndex}
                                            className="swiper-slide !w-[320px] mb-[20px]"
                                        >
                                            <ImageLazy
                                                boxClassName="w-[300px] h-[180px]"
                                                src={item.url}
                                                alt=""
                                                imageClassName="image-object-fit rounded-[8px]"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="swiper-scrollbar"></div>
                            </div>
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    );
};
