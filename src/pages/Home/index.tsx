import React, { FC, useEffect } from 'react';
import Swiper from 'swiper';
import { HomeCourse } from './HomeCourse';
import { HomeActivity } from './HomeActivity';

type HomeProps = {};

const Home: FC<HomeProps> = (props) => {
    useEffect(() => {
        const homeSwiper = new Swiper('#home-page-swiper', {
            direction: 'vertical',
            mousewheel: true,
            speed: 800,
            slidesPerView: 'auto',
        });
        let startScroll: number, touchStart: number, touchCurrent;
        homeSwiper.slides.on(
            'touchstart',
            function (e: any) {
                // @ts-ignore
                startScroll = this.scrollTop;
                touchStart = e.targetTouches[0].pageY;
            },
            true,
        );
        homeSwiper.slides.on(
            'touchmove',
            function (e: any) {
                touchCurrent = e.targetTouches[0].pageY;
                let touchesDiff = touchCurrent - touchStart;
                // @ts-ignore
                let slide = this;
                let onlyScrolling =
                    slide.scrollHeight > slide.offsetHeight &&
                    ((touchesDiff < 0 && startScroll === 0) ||
                        (touchesDiff > 0 &&
                            startScroll ===
                                slide.scrollHeight - slide.offsetHeight) ||
                        (startScroll > 0 &&
                            startScroll <
                                slide.scrollHeight - slide.offsetHeight));
                if (onlyScrolling) {
                    e.stopPropagation();
                }
            },
            true,
        );
    }, []);
    return (
        <div className="relative">
            <div
                className="swiper-container w-full bg-[#181818]"
                id="home-page-swiper"
                style={{
                    height: 'calc(100vh - 16.9vw)',
                }}
            >
                <div className="swiper-wrapper w-full h-full">
                    <div className="swiper-slide w-full h-full">
                        <HomeCourse></HomeCourse>
                    </div>
                    <div className="swiper-slide w-full h-full overflow-y-scroll">
                        <HomeActivity></HomeActivity>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
