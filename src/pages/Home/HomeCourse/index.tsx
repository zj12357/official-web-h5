import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import Swiper from 'swiper';
import { Pointlayput } from './PointLayput';
import { homeCourseList, selectCourseList } from '@/store/home/homeSlice';

export const HomeCourse = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const getCourseList = useSelector(selectCourseList);
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
    const [courseSwiper, setCourseSwiper] = useState(null);
    const [showDownIncon, setShowDownIncon] = useState(true);

    const changeSlide = (index: number) => {
        if (courseSwiper) {
            // @ts-ignore
            courseSwiper.slideTo(index, 1000, false);
            setCurrentIndex(index);
        }
    };

    const handleShowDownIcon = () => {
        const scrollTop =
            document.documentElement.scrollTop ||
            window.pageYOffset ||
            document.body.scrollTop;

        if (scrollTop > 30) {
            setShowDownIncon(false);
        } else {
            setShowDownIncon(true);
        }
    };

    useEffect(() => {
        const course = new Swiper('#home-course', {
            mousewheel: true,
            speed: 800,
            navigation: {
                nextEl: '.course-next',
                prevEl: '.course-prev',
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            on: {
                slideChangeTransitionEnd: function () {
                    // @ts-ignore
                    setCurrentIndex(this.activeIndex);
                },
            },
        });
        setCourseSwiper(course);
    }, []);

    useEffect(() => {
        dispatch(homeCourseList());
    }, []);
    useEffect(() => {
        let cancel = false;
        window.addEventListener('scroll', () => {
            if (cancel) return;
            handleShowDownIcon();
        });
        return () => {
            cancel = true;
        };
    }, []);

    return (
        <div
            className="w-full"
            style={{
                height: `calc(${
                    window.innerHeight ||
                    document.body.clientHeight ||
                    document.documentElement.offsetHeight
                }px - 16.9vw - 26.57vw)`,
            }}
        >
            <div
                className="swiper-container w-full h-full relative"
                id="home-course"
            >
                <div className="swiper-wrapper w-full h-full">
                    {courseList.map((item) => (
                        <div
                            className="swiper-slide w-full h-full bg-cover bg-no-repeat bg-top pl-[20px] pt-[120px]"
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
                                            'wow animate__animated animate__fadeInUp animate__delay-400ms':
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
                                            'wow animate__animated animate__fadeInUp animate__delay-800ms':
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
                <div className="course-prev absolute bottom-[100px] left-[20px] z-[9]">
                    <img
                        src={
                            require('@/assets/images/icon/swiper-prev-icon.svg')
                                .default
                        }
                        alt=""
                        className="w-[40px]"
                    />
                </div>
                <div className="course-next absolute bottom-[100px] left-[120px] z-[9]">
                    <img
                        src={
                            require('@/assets/images/icon/swiper-next-icon.svg')
                                .default
                        }
                        alt=""
                        className="w-[40px]"
                    />
                </div>
            </div>
            <div className="w-full h-[110px] bg-[#38342E] relative">
                <div className="absolute left-0 top-[-40px] w-full z-[9]">
                    <img
                        src={
                            require('@/assets/images/home/cover-top.png')
                                .default
                        }
                        alt=""
                        className="w-full"
                    />
                </div>
                <div className="absolute left-0 top-0 z-10 bg-[#000] w-full h-full bg-opacity-50 overflow-hidden">
                    <Pointlayput
                        currentIndex={currentIndex}
                        changeSlide={changeSlide}
                    ></Pointlayput>
                </div>
                <div className="absolute left-0 bottom-0 w-full z-[9]">
                    <img
                        src={
                            require('@/assets/images/home/cover-bottom.png')
                                .default
                        }
                        alt=""
                        className="w-full"
                    />
                </div>
                {showDownIncon && (
                    <div className="animate-down-slide absolute left-[50%] translate-x-[-50%] bottom-[5px] z-[11]">
                        <img
                            src={
                                require('@/assets/images/icon/down-icon.svg')
                                    .default
                            }
                            alt=""
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
