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
            icon: require('@/assets/images/icon/travel-01-icon.svg').default,
            activeIcon:
                require('@/assets/images/icon/travel-active-01-icon.svg')
                    .default,
            name: t('nav-title-tourist-attraction'),
        },
        {
            icon: require('@/assets/images/icon/travel-02-icon.svg').default,
            activeIcon:
                require('@/assets/images/icon/travel-active-02-icon.svg')
                    .default,
            name: t('nav-title-ticket'),
        },
        {
            icon: require('@/assets/images/icon/travel-03-icon.svg').default,
            activeIcon:
                require('@/assets/images/icon/travel-active-03-icon.svg')
                    .default,
            name: t('nav-title-visa-security'),
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
                                <div
                                    className={classnames(
                                        ' border-[1px] border-[#C0C0C0] border-solid rounded-full w-[40px] h-[40px] flex justify-center items-center mb-[10px]',
                                        {
                                            '!border-[#FFD78E]':
                                                currentIndex === index,
                                        },
                                    )}
                                >
                                    <ImageLazy
                                        src={
                                            currentIndex === index
                                                ? item.activeIcon
                                                : item.icon
                                        }
                                        alt=""
                                        imageClassName="w-[22px]"
                                        iconClasssName="w-[20px]"
                                        boxIconClassName="w-[40px] h-[40px]"
                                    />
                                </div>

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
