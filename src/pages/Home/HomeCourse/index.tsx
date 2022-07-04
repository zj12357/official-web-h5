import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

export const HomeCourse = () => {
    const { t } = useTranslation();
    const courseList = [
        {
            currentIndex: 0,
            title1: t('home-course-title-01-time'),
            title2: t('home-course-title-01-content1'),
            title3: t('home-course-title-01-content2'),
            image: require('@/assets/images/home/home-course-01.png').default,
        },
        {
            currentIndex: 1,
            title1: t('home-course-title-02-time'),
            title2: t('home-course-title-02-content1'),
            title3: t('home-course-title-02-content2'),
            image: require('@/assets/images/home/home-course-02.png').default,
        },
        {
            currentIndex: 2,
            title1: t('home-course-title-03-time'),
            title2: t('home-course-title-03-content1'),
            title3: t('home-course-title-03-content2'),
            image: require('@/assets/images/home/home-course-03.png').default,
        },
        {
            currentIndex: 3,
            title1: t('home-course-title-04-time'),
            title2: t('home-course-title-04-content1'),
            title3: t('home-course-title-04-content2'),
            image: require('@/assets/images/home/home-course-04.png').default,
        },
        {
            currentIndex: 4,
            title1: t('home-course-title-05-time'),
            title2: t('home-course-title-05-content1'),
            title3: t('home-course-title-05-content2'),
            image: require('@/assets/images/home/home-course-05.png').default,
        },
        {
            currentIndex: 5,
            title1: t('home-course-title-06-time'),
            title2: t('home-course-title-06-content1'),
            title3: t('home-course-title-06-content2'),
            image: require('@/assets/images/home/home-course-06.png').default,
        },
        {
            currentIndex: 6,
            title1: '',
            title2: t('home-course-title-07-content1'),
            title3: t('home-course-title-07-content2'),
            image: require('@/assets/images/home/home-course-07.png').default,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const course = new Swiper('#home-course', {
            mousewheel: true,
            speed: 800,
            on: {
                slideChangeTransitionEnd: function () {
                    // @ts-ignore
                    setCurrentIndex(this.activeIndex);
                },
            },
        });
    }, []);

    return (
        <div
            className="w-full"
            style={{
                height: 'calc(100vh - 16.9vw)',
            }}
        >
            <div className="swiper-container w-full h-full" id="home-course">
                <div className="swiper-wrapper w-full h-full">
                    {courseList.map((item, index) => (
                        <div
                            className="swiper-slide w-full h-full bg-cover bg-no-repeat bg-top pl-[20px] pt-[250px]"
                            style={{ backgroundImage: `url(${item.image})` }}
                            key={item.currentIndex}
                        >
                            <div
                                className={classnames('hidden', {
                                    '!block':
                                        currentIndex === item.currentIndex,
                                })}
                            >
                                <h6
                                    className={classnames(
                                        'text-[20px] text-white my-[5px] ',
                                        {
                                            'wow animate__animated animate__fadeInUp':
                                                currentIndex ===
                                                item.currentIndex,
                                        },
                                    )}
                                >
                                    {item.title1}
                                </h6>
                                <h2
                                    className={classnames(
                                        'text-[32px] text-white my-[5px] ',
                                        {
                                            'wow animate__animated animate__fadeInUp animate__delay-500ms':
                                                currentIndex ===
                                                item.currentIndex,
                                        },
                                    )}
                                >
                                    {item.title2}
                                </h2>
                                <h2
                                    className={classnames(
                                        'text-[32px] text-white my-[5px] ',
                                        {
                                            'wow animate__animated animate__fadeInUp animate__delay-1s':
                                                currentIndex ===
                                                item.currentIndex,
                                        },
                                    )}
                                >
                                    {item.title3}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
