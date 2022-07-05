import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Swiper from 'swiper';

export const HomeDynamic = () => {
    const { t } = useTranslation();
    const dynamicList = [
        {
            currentIndex: 0,
            image: require('@/assets/images/home/home-dynamic-01.png').default,
            content: '2022-06-12 OKBET发布会',
        },
        {
            currentIndex: 1,
            image: require('@/assets/images/home/home-dynamic-01.png').default,
            content: '2022-06-12 OKBET发布会',
        },
        {
            currentIndex: 2,
            image: require('@/assets/images/home/home-dynamic-01.png').default,
            content: '2022-06-12 OKBET发布会',
        },
        {
            currentIndex: 3,
            image: require('@/assets/images/home/home-dynamic-01.png').default,
            content: '2022-06-12 OKBET发布会',
        },
    ];
    useEffect(() => {
        const dynamic = new Swiper('#home-dynamic', {
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
    }, []);
    return (
        <div className="w-full h-full p-[20px]">
            <div className="w-full flex justify-between items-center border-b border-solid border-[#404040] py-[20px]">
                <div className="text-[#FFD78E] text-[24px]">
                    {t('home-dynamic-title')}
                </div>
                <div
                    className="text-[#FFD78E] text-[12px] rounded-[12px] border border-solid border-[#FFD78E] 
                px-[6px]"
                >
                    {t('home-dynamic-more')}
                </div>
            </div>
            <div className="swiper-container mt-[30px]" id="home-dynamic">
                <div className="swiper-wrapper w-full">
                    {dynamicList.map((item) => (
                        <div
                            key={item.currentIndex}
                            className="swiper-slide !w-[270px]"
                        >
                            <div className="w-[220px] h-[250px]">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="image-object-fit"
                                />
                            </div>
                            <p className="my-[20px] text-[#BFA983] text-[14px]">
                                {item.content}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="swiper-scrollbar"></div>
            </div>
        </div>
    );
};
