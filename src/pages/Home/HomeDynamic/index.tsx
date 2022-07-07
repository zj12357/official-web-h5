import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Swiper from 'swiper';

export const HomeDynamic = () => {
    const { t } = useTranslation();
    const history = useHistory();
    const dynamicList = [
        {
            currentIndex: 0,
            image: require('@/assets/images/test/home-dynamic-01.png').default,
            content: '2022-06-12 OKBET发布会',
        },
        {
            currentIndex: 1,
            image: require('@/assets/images/test/home-dynamic-01.png').default,
            content: '2022-06-12 OKBET发布会',
        },
        {
            currentIndex: 2,
            image: require('@/assets/images/test/home-dynamic-01.png').default,
            content: '2022-06-12 OKBET发布会',
        },
        {
            currentIndex: 3,
            image: require('@/assets/images/test/home-dynamic-01.png').default,
            content: '2022-06-12 OKBET发布会',
        },
    ];
    const toPage = (path: string) => {
        history.push(path);
    };

    useEffect(() => {
        const dynamic = new Swiper('#home-dynamic', {
            mousewheel: true,
            observer: true,
            observeParents: true,
            speed: 800,
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
        dynamic.scrollbar.$dragEl.css('background', '#BFA983');
        dynamic.scrollbar.$el.css('height', '3px');
    }, []);
    return (
        <div className="w-full h-full p-[20px]">
            <div className="w-full flex justify-between items-center not-last-child-border py-[20px]">
                <div className="text-[#FFD78E] text-[24px]">
                    {t('home-dynamic-title')}
                </div>
                <div
                    className="text-[#FFD78E] text-[12px] rounded-[12px] border border-solid border-[#FFD78E] 
                px-[6px]"
                    onClick={() => toPage('/latestNews')}
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
