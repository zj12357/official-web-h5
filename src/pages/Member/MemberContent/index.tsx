import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectMemberList, selectHasMore } from '@/store/member/memberSlice';
import InfiniteScroll from 'react-infinite-scroll-component';
import PageLoading from '@/components/Loading/PageLoading';
import ImageLazy from '@/components/ImageLazy';

type MemberContentProps = {
    changePage: () => void;
};

export const MemberContent: FC<MemberContentProps> = ({ changePage }) => {
    const contentList = useSelector(selectMemberList);
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
                >
                    {contentList.map((item, index) => (
                        <div
                            className="w-full not-last-child-border py-[20px] "
                            key={index}
                        >
                            <h2 className="text-[#FFD78E] text-[20px] mt-[10px]  mb-[20px] wow animate__animated animate__fadeInUp animate__delay-200ms">
                                {item.title}
                            </h2>
                            <div className=" mb-[10px] wow animate__animated animate__fadeInUp animate__delay-300ms">
                                <ImageLazy
                                    boxClassName="w-[374px] h-[180px]"
                                    src={item.image}
                                    imageClassName="image-object-fit rounded-[8px]"
                                    alt=""
                                />
                            </div>
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    );
};
