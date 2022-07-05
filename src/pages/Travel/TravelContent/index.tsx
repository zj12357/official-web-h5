import React, { FC, Fragment } from 'react';

type TravelContentProps = {};

export const TravelContent: FC<TravelContentProps> = (props) => {
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
    return (
        <div className="w-full p-[20px] bg-[#181818]">
            <div className="w-full flex justify-between flex-wrap wow animate__animated animate__fadeInUp animate__delay-200ms">
                {tabList.map((item, index) => (
                    <Fragment key={index}>
                        <div className="flex flex-col justify-center items-center w-[25%] mb-[20px]">
                            <img
                                src={item.image}
                                alt=""
                                className="h-[24px] mb-[10px]"
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
                    >
                        <div className="w-[184px] h-[180px] mb-[10px]">
                            <img
                                src={item.image}
                                alt=""
                                className="image-object-fit"
                            />
                        </div>
                        <span className="text-[#FFD78E] text-[12px]">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
