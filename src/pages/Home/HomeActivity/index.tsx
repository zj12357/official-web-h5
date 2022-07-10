import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
    storePromoList,
    selectPromoList,
    selectPromoHasmore,
} from '@/store/home/homeSlice';
import ImageLazy from '@/components/ImageLazy';
import PageLoading from '@/components/Loading/PageLoading';

export const HomeActivity = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const activityList = useSelector(selectPromoList);
    const hasMore = useSelector(selectPromoHasmore);
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
        dispatch(storePromoList(params));
    }, [params]);
    return (
        <div className="w-full p-[20px] h-full mt-[110px]">
            <h1 className="text-[24px] text-[#FFD78E] py-[20px] not-last-child-border">
                {t('home-activity-title')}
            </h1>
            <div>
                <InfiniteScroll
                    next={changePage}
                    hasMore={hasMore}
                    dataLength={activityList.length}
                    loader={<PageLoading></PageLoading>}
                    className="w-full"
                    scrollThreshold={0.58}
                    endMessage={
                        <div className="w-full  mt-[20px]   text-[#FFD78E] text-center text-[14px]">
                            {t('common-no-more')}
                        </div>
                    }
                >
                    {activityList?.map((item, index) => (
                        <ImageLazy
                            src={item.coverImage}
                            imageClassName="rounded-[8px] image-object-fit"
                            key={index}
                            boxClassName="w-[374px] h-[100px] mt-[20px]"
                        />
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    );
};
