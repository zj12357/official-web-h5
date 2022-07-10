import React, { FC, Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import ImageLazy from '@/components/ImageLazy';
import {
    selectHotelCateringList,
    selectHasMore,
    selectForHotelList,
    clearHotelCateringlList,
} from '@/store/hotelCatering/hotelCateringSlice';
import PageLoading from '@/components/Loading/PageLoading';
import { useRemovetStyle } from '@/common/dom';

type HotelCateringContentProps = {
    changeKind: (id: number) => void;
    changePage: (page?: number) => void;
};

export const HotelCateringContent: FC<HotelCateringContentProps> = ({
    changeKind,
    changePage,
}) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    useRemovetStyle('infinite-scroll-component', 'style');
    const history = useHistory();
    const contentList = useSelector(selectHotelCateringList);
    const hasMore = useSelector(selectHasMore);
    const tabList = useSelector(selectForHotelList);
    const [currentIndex, setCurrentIndex] = useState(0);

    const toDetail = (id: string, category: string) => {
        history.push(`/hotelCateringDetail/${id}/${category}`);
    };
    const clearList = () => {
        dispatch(clearHotelCateringlList());
    };

    const handleCurrentIndex = (index: number, id: number) => {
        setCurrentIndex(index);
        changeKind(id);
        changePage(1);
        clearList();
    };
    return (
        <div className="w-full p-[20px] bg-[#181818]">
            <div className="w-full pt-[10px]">
                <div className="w-full flex justify-between flex-wrap wow animate__animated animate__fadeInUp animate__delay-200ms">
                    {tabList?.map((item, index) => (
                        <Fragment key={index}>
                            <div
                                className="flex flex-col justify-center items-center w-[25%] mb-[20px]"
                                onClick={() =>
                                    handleCurrentIndex(index, +item.id)
                                }
                            >
                                <ImageLazy
                                    src={item.icon}
                                    alt=""
                                    boxClassName="mb-[10px]"
                                    imageClassName={classnames('h-[24px]', {
                                        'filter grayscale':
                                            currentIndex !== index,
                                    })}
                                    iconClasssName="w-[12px]"
                                    boxIconClassName="w-[24px] h-[24px]"
                                />

                                <span
                                    className={classnames(
                                        ' text-[#FFD78E] text-[14px]',
                                        {
                                            '!text-[#C0C0C0]':
                                                currentIndex !== index,
                                        },
                                    )}
                                >
                                    {item.name}
                                </span>
                            </div>
                        </Fragment>
                    ))}
                    {Array.from(
                        Array(
                            tabList.length - 1 < 0 ? 0 : tabList.length - 1,
                        ).keys(),
                    ).map((i) => (
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
                                onClick={() => toDetail(item.id, item.category)}
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
