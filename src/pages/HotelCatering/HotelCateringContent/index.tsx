import React, { FC, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ImageLazy from '@/components/ImageLazy';
import {
    selectHotelCateringList,
    selectHasMore,
} from '@/store/hotelCatering/hotelCateringSlice';
import PageLoading from '@/components/Loading/PageLoading';
import { useRemovetStyle } from '@/common/dom';

type HotelCateringContentProps = {
    changeKind: (kind: number) => void;
    changePage: () => void;
};

export const HotelCateringContent: FC<HotelCateringContentProps> = ({
    changeKind,
    changePage,
}) => {
    const { t } = useTranslation();
    useRemovetStyle('infinite-scroll-component', 'style');
    const history = useHistory();
    const contentList = useSelector(selectHotelCateringList);
    const hasMore = useSelector(selectHasMore);
    const tabList = [
        {
            image: require('@/assets/images/test/hotel-catering-title-icon.svg')
                .default,
            name: '新濠天地',
        },
        {
            image: require('@/assets/images/test/hotel-catering-title-icon.svg')
                .default,
            name: '新濠天地',
        },
        {
            image: require('@/assets/images/test/hotel-catering-title-icon.svg')
                .default,
            name: '新濠天地',
        },
        {
            image: require('@/assets/images/test/hotel-catering-title-icon.svg')
                .default,
            name: '新濠天地',
        },
        {
            image: require('@/assets/images/test/hotel-catering-title-icon.svg')
                .default,
            name: '新濠天地',
        },
    ];

    const toDetail = (id: number) => {
        history.push(`/hotelCateringDetail/${id}`);
    };
    return (
        <div className="w-full p-[20px] bg-[#181818]">
            <div className="w-full pt-[10px]">
                <div className="w-full flex justify-between flex-wrap wow animate__animated animate__fadeInUp animate__delay-200ms">
                    {tabList.map((item, index) => (
                        <Fragment key={index}>
                            <div className="flex flex-col justify-center items-center w-[25%] mb-[20px]">
                                <ImageLazy
                                    src={item.image}
                                    alt=""
                                    boxClassName="mb-[10px]"
                                    imageClassName="h-[24px]"
                                    iconClasssName="w-[20px]"
                                    boxIconClassName="w-[40px] h-[40px]"
                                />

                                <span className="text-[#C0C0C0] text-[14px]">
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
                                onClick={() => toDetail(1)}
                            >
                                <div className=" mb-[10px]">
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
