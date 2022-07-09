import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    selectRecruitmentList,
    selectHasMore,
} from '@/store/recruitment/recruitmentSlice';
import InfiniteScroll from 'react-infinite-scroll-component';
import PageLoading from '@/components/Loading/PageLoading';

type RecruitmentContentProps = {
    changePage: () => void;
};

export const RecruitmentContent: FC<RecruitmentContentProps> = ({
    changePage,
}) => {
    const { t } = useTranslation();
    const history = useHistory();
    const hasMore = useSelector(selectHasMore);

    const contentList = useSelector(selectRecruitmentList);
    const publicityList = [
        {
            icon: require('@/assets/images/icon/shield-icon.svg').default,
            title: t('recruitment-publicity-title-01'),
        },
        {
            icon: require('@/assets/images/icon/crown-icon.svg').default,
            title: t('recruitment-publicity-title-02'),
        },
        {
            icon: require('@/assets/images/icon/heart-icon.svg').default,
            title: t('recruitment-publicity-title-03'),
        },
    ];

    const toDetail = (id: number) => {
        history.push(`/recruitmentDetail/${id}`);
    };
    return (
        <div className="w-full p-[20px] bg-[#181818]">
            <div className="w-full pt-[10px]">
                <div className="mt-[34px] wow animate__animated animate__fadeInUp animate__fadeInUp animate__delay-200ms">
                    {publicityList.map((item, index) => (
                        <div
                            className="w-full mb-[54px] flex items-center"
                            key={index}
                        >
                            <img className="w-[64px]" src={item.icon} alt="" />
                            <p className="flex-1 ml-[20px] text-[#BFA983] text-[16px]">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
                <div>
                    <h2 className="w-full pb-[20px] border-b border-solid border-[#404040] text-[#FFD78E] text-[24px] wow animate__animated animate__fadeInUp animate__fadeInUp animate__delay-300ms">
                        {t('recruitment-position-title')}
                    </h2>
                    <div className="w-full wow animate__animated animate__fadeInUp animate__fadeInUp animate__delay-400ms">
                        <InfiniteScroll
                            next={changePage}
                            hasMore={hasMore}
                            dataLength={contentList.length}
                            loader={<PageLoading></PageLoading>}
                            className="w-full pt-[10px]"
                        >
                            {contentList.map((item, index) => (
                                <div
                                    className="not-last-child-border pt-[30px] pb-[20px]"
                                    key={index}
                                    onClick={() => toDetail(1)}
                                >
                                    <div className="flex justify-between items-center mb-[5px]">
                                        <h5 className="text-[#FFD78E] text-[16px]">
                                            {item.name}
                                        </h5>
                                        <span className="text-[#BFA983] text-[14px]">
                                            {t(
                                                'recruitment-position-detail-title',
                                            )}
                                        </span>
                                    </div>
                                    <p className="text-[#BFA983] text-[12px] mt-[5px]">
                                        {item.require}
                                    </p>
                                    <p className="text-[#BFA983] text-[12px] mt-[5px]">
                                        {item.salary}
                                    </p>
                                    <p className="text-[#BFA983] text-[12px]  mt-[5px]">
                                        {item.time}
                                    </p>
                                </div>
                            ))}
                        </InfiniteScroll>
                    </div>
                </div>
            </div>
        </div>
    );
};
