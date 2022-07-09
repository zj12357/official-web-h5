import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useTranslation } from 'react-i18next';
import {
    selectHallList,
    selectHasMore,
} from '@/store/respected/respectedSlice';
import ImageLazy from '@/components/ImageLazy';
import PageLoading from '@/components/Loading/PageLoading';
import { useRemovetStyle } from '@/common/dom';

type RespectedContentProps = {
    changePage: () => void;
};

export const RespectedContent: FC<RespectedContentProps> = ({ changePage }) => {
    const { t } = useTranslation();
    useRemovetStyle('infinite-scroll-component', 'style');
    const contentList = useSelector(selectHallList);
    const hasMore = useSelector(selectHasMore);

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
                    {contentList.map((item, index) => (
                        <div
                            className="w-full not-last-child-border pt-[20px] pb-[10px]"
                            key={index}
                        >
                            <div className="flex items-center wow animate__animated animate__fadeInUp animate__fadeInUp animate__delay-200ms">
                                <ImageLazy
                                    src={item.icon}
                                    alt=""
                                    boxClassName="mr-[10px]"
                                    imageClassName="h-[24px]"
                                    iconClasssName="w-[12px]"
                                    boxIconClassName="w-[24px] h-[24px]"
                                />
                                <span className="text-[#FFD78E] text-[24px]">
                                    {item.title}
                                </span>
                            </div>
                            <div className="my-[20px] wow animate__animated animate__fadeInUp animate__delay-300ms">
                                <ImageLazy
                                    src={item.coverImage}
                                    boxClassName="w-[374px] h-[180px]"
                                    alt=""
                                    imageClassName="image-object-fit rounded-[8px]"
                                />
                            </div>

                            <p className="text-[12px] text-[#BFA983] mb-[10px] wow animate__animated animate__fadeInUp animate__delay-400ms">
                                {item.phone}
                            </p>
                            <p className="text-[12px] text-[#BFA983] wow animate__animated animate__fadeInUp animate__delay-400ms">
                                {item.address}
                            </p>
                            <div className="flex  justify-between flex-wrap mt-[20px] wow animate__animated animate__fadeInUp animate__delay-500ms">
                                {item.games.map((game, gIndex) => (
                                    <Fragment key={gIndex}>
                                        <div className="flex flex-col justify-center items-center mb-[20px] w-[25%]">
                                            <ImageLazy
                                                src={game.gameIcon}
                                                alt=""
                                                boxClassName="mb-[10px]"
                                                imageClassName="w-[40px]"
                                                iconClasssName="w-[20px]"
                                                boxIconClassName="w-[40px] h-[40px]"
                                            />
                                            <span className="text-[#BFA983] text-[12px]">
                                                {game.gameName}
                                            </span>
                                        </div>
                                    </Fragment>
                                ))}
                                {Array.from(
                                    Array(item.games.length - 1).keys(),
                                ).map((i) => (
                                    <i className="w-[25%]" key={i}></i>
                                ))}
                            </div>
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    );
};
