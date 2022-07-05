import React, { FC, useEffect } from 'react';
import Swiper from 'swiper';

type LatestNewsContentProps = {};

export const LatestNewsContent: FC<LatestNewsContentProps> = (props) => {
    const contentList = [
        {
            title: 'OKBET发布会',
            time: '2022/06/16',
            content:
                'OKBET发布会文本说明信息占位，信息OKBET发布会文本说明信息占位信息OKBET发布会文本说明信息占位信息OKBET发布会文本说明信息占位信息OKBET发布会文本说明信息占位信息OKBET发布会文本说明信息占位信息',
            swiper: [
                {
                    image: require('@/assets/images/test/latest-news-banner-01.png')
                        .default,
                },
                {
                    image: require('@/assets/images/test/latest-news-banner-01.png')
                        .default,
                },
                {
                    image: require('@/assets/images/test/latest-news-banner-01.png')
                        .default,
                },
                {
                    image: require('@/assets/images/test/latest-news-banner-01.png')
                        .default,
                },
                {
                    image: require('@/assets/images/test/latest-news-banner-01.png')
                        .default,
                },
            ],
        },
        {
            title: 'OKBET发布会',
            time: '2022/06/16',
            content:
                'OKBET发布会文本说明信息占位，信息OKBET发布会文本说明信息占位信息OKBET发布会文本说明信息占位信息OKBET发布会文本说明信息占位信息OKBET发布会文本说明信息占位信息OKBET发布会文本说明信息占位信息',
            swiper: [
                {
                    image: require('@/assets/images/test/latest-news-banner-01.png')
                        .default,
                },
                {
                    image: require('@/assets/images/test/latest-news-banner-01.png')
                        .default,
                },
                {
                    image: require('@/assets/images/test/latest-news-banner-01.png')
                        .default,
                },
                {
                    image: require('@/assets/images/test/latest-news-banner-01.png')
                        .default,
                },
                {
                    image: require('@/assets/images/test/latest-news-banner-01.png')
                        .default,
                },
            ],
        },
        {
            title: 'OKBET发布会',
            time: '2022/06/16',
            content:
                'OKBET发布会文本说明信息占位，信息OKBET发布会文本说明信息占位信息OKBET发布会文本说明信息占位信息OKBET发布会文本说明信息占位信息OKBET发布会文本说明信息占位信息OKBET发布会文本说明信息占位信息',
            swiper: [
                {
                    image: require('@/assets/images/test/latest-news-banner-01.png')
                        .default,
                },
                {
                    image: require('@/assets/images/test/latest-news-banner-01.png')
                        .default,
                },
                {
                    image: require('@/assets/images/test/latest-news-banner-01.png')
                        .default,
                },
                {
                    image: require('@/assets/images/test/latest-news-banner-01.png')
                        .default,
                },
                {
                    image: require('@/assets/images/test/latest-news-banner-01.png')
                        .default,
                },
            ],
        },
    ];

    useEffect(() => {
        contentList.forEach((_, index) => {
            const dynamic = new Swiper(`#latest-news-dynamic${index}`, {
                mousewheel: true,
                speed: 800,
                slidesPerView: 'auto',
                freeMode: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true,
                },
            });
            dynamic.scrollbar.$dragEl.css('background', '#BFA983');
            dynamic.scrollbar.$el.css('height', '3px');
        });
    }, []);

    return (
        <div className="w-full p-[20px] bg-[#181818]">
            {contentList.map((item, index) => (
                <div
                    className="w-full py-[20px] border-b border-solid border-[#404040]"
                    key={index}
                >
                    <div className="w-full flex justify-between mt-[10px] mb-[20px] items-center wow animate__animated animate__fadeInUp animate__delay-200ms">
                        <div className="text-[#FFD78E] text-[20px]">
                            {item.title}
                        </div>
                        <div className="text-[14px] text-[#FFD78E]">
                            {item.time}
                        </div>
                    </div>
                    <p className="text-[12px] text-[#BFA983] wow animate__animated animate__fadeInUp animate__delay-300ms">
                        {item.content}
                    </p>
                    <div
                        className="swiper-container my-[10px] wow animate__animated animate__fadeInUp animate__delay-400ms"
                        id={'latest-news-dynamic' + index}
                    >
                        <div className="swiper-wrapper w-full">
                            {item.swiper.map((item, sIndex) => (
                                <div
                                    key={sIndex}
                                    className="swiper-slide !w-[320px] mb-[20px]"
                                >
                                    <div className="w-[300px] h-[180px]">
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="image-object-fit"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="swiper-scrollbar"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};
