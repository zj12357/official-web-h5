import React, { FC, useEffect } from 'react';
import Swiper from 'swiper';
import classnames from 'classnames';

interface contentImageType {
    url: string;
    title?: string;
    content?: string;
}
type IntroductionImageProps = {
    imageList: contentImageType[];
};

const IntroductionImage: FC<IntroductionImageProps> = ({ imageList }) => {
    useEffect(() => {
        const dynamic = new Swiper('#detail-swiper', {
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
        <div className="w-full not-last-child-border py-[20px]">
            <div
                className="swiper-container mt-[30px] wow animate__animated animate__fadeInUp animate__delay-200ms"
                id="detail-swiper"
            >
                <div className="swiper-wrapper w-full pb-[20px]">
                    {imageList.map((item, index) => (
                        <div key={index} className="swiper-slide !w-[320px]">
                            <div className="w-[300px] h-[180px]">
                                <img
                                    src={item.url}
                                    alt=""
                                    className="image-object-fit"
                                />
                            </div>
                            {item.title && (
                                <p className="my-[10px] text-[#FFD78E] text-[12px]">
                                    {item.title}
                                </p>
                            )}
                            {item.content && (
                                <p className="mb-[10px] text-[#BFA983] text-[12px]">
                                    {item.content}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="swiper-scrollbar"></div>
            </div>
        </div>
    );
};

export default IntroductionImage;
