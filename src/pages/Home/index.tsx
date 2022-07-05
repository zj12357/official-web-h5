import React, { FC, useEffect, useState } from 'react';
import Swiper from 'swiper';
import { HomeCourse } from './HomeCourse';
import { HomeActivity } from './HomeActivity';
import { HomeDynamic } from './HomeDynamic';
import Footer from '@/components/Footer';

type HomeProps = {};

const Home: FC<HomeProps> = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const homeSwiper = new Swiper('#home-page-swiper', {
            direction: 'vertical',
            mousewheel: true,
            speed: 800,
            on: {
                slideChangeTransitionEnd: function () {
                    // @ts-ignore
                    setCurrentIndex(this.activeIndex);
                },
            },
        });
        var startScroll: number, touchStart: number, touchCurrent;
        homeSwiper.slides.on(
            'touchstart',
            function (e: any) {
                // @ts-ignore
                startScroll = Math.floor(this.scrollTop); // 针对android获取到小数进行向下取整
                touchStart = e.targetTouches[0].pageY;
            },
            true,
        );
        homeSwiper.slides.on(
            'touchmove',
            function (e: any) {
                touchCurrent = e.targetTouches[0].pageY;
                const touchesDiff = touchCurrent - touchStart;
                // @ts-ignore
                const slide = this;
                const onlyScrolling =
                    slide.scrollHeight > slide.offsetHeight && //allow only when slide is scrollable
                    ((touchesDiff < 0 && startScroll === 0) || //start from top edge to scroll bottom
                        (touchesDiff > 0 &&
                            startScroll ===
                                slide.scrollHeight - slide.offsetHeight) || //start from bottom edge to scroll top
                        (startScroll > 0 &&
                            startScroll <
                                slide.scrollHeight - slide.offsetHeight)); //start from the middle
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
                    height: `calc(${
                        window.innerHeight ||
                        document.body.clientHeight ||
                        document.documentElement.offsetHeight
                    }px - 16.9vw)`,
                }}
            >
                <div className="swiper-wrapper w-full h-full">
                    <div className="swiper-slide w-full h-full overflow-auto">
                        <HomeCourse courseIndex={currentIndex}></HomeCourse>
                    </div>
                    <div className="swiper-slide w-full h-full overflow-auto">
                        <HomeActivity></HomeActivity>
                    </div>
                    <div className="swiper-slide w-full h-full overflow-auto">
                        <HomeDynamic></HomeDynamic>
                    </div>
                    <div className="swiper-slide w-full h-full overflow-auto">
                        <Footer className={'h-full'}></Footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
