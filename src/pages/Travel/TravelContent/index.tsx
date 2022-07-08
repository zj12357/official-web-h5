import React, { FC, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTravelList } from '@/store/travel/travelSlice';
import ImageLazy from '@/components/ImageLazy';

type TravelContentProps = {};

export const TravelContent: FC<TravelContentProps> = (props) => {
    const travelList = useSelector(selectTravelList);
    const history = useHistory();
    const tabList = [
        {
            image: require('@/assets/images/test/travel-title-icon.svg')
                .default,
            name: '旅游景点',
        },
        {
            image: require('@/assets/images/test/travel-title-icon.svg')
                .default,
            name: '旅游景点',
        },
        {
            image: require('@/assets/images/test/travel-title-icon.svg')
                .default,
            name: '旅游景点',
        },
        {
            image: require('@/assets/images/test/travel-title-icon.svg')
                .default,
            name: '旅游景点',
        },
        {
            image: require('@/assets/images/test/travel-title-icon.svg')
                .default,
            name: '旅游景点',
        },
    ];
    const contentList = [
        {
            image: require('@/assets/images/test/travel-01.png').default,
            name: '黎刹公园',
        },
        {
            image: require('@/assets/images/test/travel-01.png').default,
            name: '黎刹公园',
        },
        {
            image: require('@/assets/images/test/travel-01.png').default,
            name: '黎刹公园',
        },
        {
            image: require('@/assets/images/test/travel-01.png').default,
            name: '黎刹公园',
        },
        {
            image: require('@/assets/images/test/travel-01.png').default,
            name: '黎刹公园',
        },
        {
            image: require('@/assets/images/test/travel-01.png').default,
            name: '黎刹公园',
        },
        {
            image: require('@/assets/images/test/travel-01.png').default,
            name: '黎刹公园',
        },
        {
            image: require('@/assets/images/test/travel-01.png').default,
            name: '黎刹公园',
        },
        {
            image: require('@/assets/images/test/travel-01.png').default,
            name: '黎刹公园',
        },
        {
            image: require('@/assets/images/test/travel-01.png').default,
            name: '黎刹公园',
        },
    ];

    const toDetail = (id: number) => {
        history.push(`/travelDetail/${id}`);
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
                <div className="my-[20px] w-full flex justify-between flex-wrap">
                    {contentList.map((item, index) => (
                        <div
                            key={index}
                            className="mb-[30px] wow animate__animated animate__fadeInUp animate__delay-300ms"
                            onClick={() => toDetail(1)}
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
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
