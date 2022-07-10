import React, { FC, useEffect } from 'react';
import Swiper from 'swiper';
import classnames from 'classnames';
import ImageLazy from '@/components/ImageLazy';

interface contentImageType {
    url: string;
    title?: string;
    content?: string;
}
type IntroductionImageProps = {
    swiperId: number;
    imageList: contentImageType[];
};

const IntroductionImage: FC<IntroductionImageProps> = ({
    imageList,
    swiperId,
}) => {
    useEffect(() => {
        const dynamic = new Swiper(`#detail-swiper-${swiperId}`, {
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
                className="swiper-container  wow animate__animated animate__fadeInUp animate__delay-200ms"
                id={`detail-swiper-${swiperId}`}
            >
                <div className="swiper-wrapper w-full pb-[20px]">
                    {imageList?.map((item, index) => (
                        <div key={index} className="swiper-slide !w-[320px]">
                            <ImageLazy
                                src={item.url}
                                alt=""
                                boxClassName="w-[300px] h-[180px]"
                                imageClassName="image-object-fit rounded-[8px]"
                            />

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
