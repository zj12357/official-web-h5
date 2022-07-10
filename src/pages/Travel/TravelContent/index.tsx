import React, { FC, Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useTranslation } from 'react-i18next';
import {
    selectTravelList,
    selectHasMore,
    clearTravelList,
} from '@/store/travel/travelSlice';
import ImageLazy from '@/components/ImageLazy';
import PageLoading from '@/components/Loading/PageLoading';
import { useRemovetStyle } from '@/common/dom';

type TravelContentProps = {
    changeKind: (kind: number) => void;
    changePage: (page?: number) => void;
};

export const TravelContent: FC<TravelContentProps> = ({
    changeKind,
    changePage,
}) => {
    useRemovetStyle('infinite-scroll-component', 'style');
    const contentList = useSelector(selectTravelList);
    const hasMore = useSelector(selectHasMore);
    const history = useHistory();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const tabList = [
        {
            image: require('@/assets/images/test/travel-title-icon.svg')
                .default,
            name: '旅游景点',
        },
        {
            image: require('@/assets/images/test/travel-title-icon.svg')
                .default,
            name: '票务出行',
        },
        {
            image: require('@/assets/images/test/travel-title-icon.svg')
                .default,
            name: '签证安保',
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const toDetail = (id: string) => {
        history.push(`/travelDetail/${id}`);
    };
    const clearList = () => {
        dispatch(clearTravelList());
    };
    const handleCurrentIndex = (index: number) => {
        setCurrentIndex(index);
        changeKind(index + 1);
        changePage(1);
        clearList();
    };

    return (
        <div className="w-full p-[20px] bg-[#181818]">
            <div className="w-full pt-[10px]">
                <div className="w-full flex justify-between flex-wrap wow animate__animated animate__fadeInUp animate__delay-200ms">
                    {tabList.map((item, index) => (
                        <Fragment key={index}>
                            <div
                                className="flex flex-col justify-center items-center w-[25%] mb-[20px]"
                                onClick={() => handleCurrentIndex(index)}
                            >
                                <ImageLazy
                                    src={item.image}
                                    alt=""
                                    boxClassName="mb-[10px]"
                                    imageClassName="h-[24px]"
                                    iconClasssName="w-[20px]"
                                    boxIconClassName="w-[40px] h-[40px]"
                                />

                                <span
                                    className={classnames(
                                        'text-[#C0C0C0] text-[14px]',
                                        {
                                            'text-[#FFD78E]':
                                                currentIndex === index,
                                        },
                                    )}
                                >
                                    {item.name}
                                </span>
                            </div>
                        </Fragment>
                    ))}
                    {Array.from(Array(tabList.length - 1).keys()).map((i) => (
                        <i key={i} className="w-[25%]"></i>
                    ))}
                </div>
                <div>
                    <InfiniteScroll
                        next={changePage}
                        hasMore={hasMore}
                        dataLength={contentList.length}
                        loader={<PageLoading></PageLoading>}
                        className="my-[20px] w-full flex justify-between flex-wrap"
                        scrollThreshold={0.58}
                        endMessage={
                            <div className="w-full  mt-[20px]   text-[#FFD78E] text-center text-[14px]">
                                {t('common-no-more')}
                            </div>
                        }
                    >
                        {contentList.map((item, index) => (
                            <div
                                key={index}
                                className="mb-[30px] wow animate__animated animate__fadeInUp animate__delay-300ms"
                                onClick={() => toDetail(item.travelId)}
                            >
                                <div className="mb-[10px]">
                                    <ImageLazy
                                        boxClassName="w-[184px] h-[180px]"
                                        src={item.image}
                                        alt=""
                                        imageClassName="image-object-fit rounded-[8px]"
                                    />
                                </div>
                                <span className="text-[#FFD78E] text-[12px]">
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </InfiniteScroll>
                </div>
            </div>
        </div>
    );
};
