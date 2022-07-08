import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import point01 from '@/assets/images/icon/point-01-icon.svg';
import point02 from '@/assets/images/icon/point-02-icon.svg';
import ImageLazy from '@/components/ImageLazy';

type PointlayputProps = {
    currentIndex: number;
    changeSlide: (index: number) => void;
    currentTime: string;
    currentIcon: string;
};

export const Pointlayput: FC<PointlayputProps> = ({
    currentIndex,
    changeSlide,
    currentTime,
    currentIcon,
}: PointlayputProps) => {
    const { t } = useTranslation();
    return (
        <div className="w-full h-full relative translate-x-[34px] translate-y-[10px]">
            <div>
                <div
                    className={classNames('hidden', {
                        '!block  animate__animated animate__flash':
                            currentIndex === 0,
                    })}
                >
                    <span className="text-[#FFD78E] text-[12px] absolute top-[14px] left-[40px] z-[9]">
                        {currentTime}
                    </span>
                    <ImageLazy
                        src={currentIcon}
                        alt=""
                        boxClassName="absolute top-[30px] left-[53px] z-[11]"
                        imageClassName="w-[20px]"
                        iconClasssName="w-[10px]"
                        boxIconClassName="w-[20px] h-[20px]  rounded-[2px]"
                    />
                </div>
                <img
                    src={point01}
                    className={classNames(
                        'absolute  top-[30px] left-[56px] z-[9]',
                        {
                            hidden: currentIndex === 0,
                        },
                    )}
                    alt=""
                    onClick={() => changeSlide(0)}
                />
            </div>
            <div className="w-[42px] h-[1px] bg-white absolute top-[42px] left-[70px] z-[-1] transform rotate-[50deg] origin-left"></div>
            <div>
                <div
                    className={classNames('hidden', {
                        '!block  animate__animated animate__flash':
                            currentIndex === 1,
                    })}
                >
                    <span className="text-[#FFD78E] text-[12px] absolute top-[80px] left-[74px] z-[9]">
                        {currentTime}
                    </span>

                    <ImageLazy
                        src={currentIcon}
                        alt=""
                        boxClassName="absolute top-[60px] left-[83px] z-[11]"
                        imageClassName="w-[20px]"
                        iconClasssName="w-[10px]"
                        boxIconClassName="w-[20px]  h-[20px] rounded-[2px]"
                    />
                </div>
                <img
                    src={point01}
                    className={classNames(
                        'absolute top-[60px] left-[83px] z-[9] ',
                        {
                            hidden: currentIndex === 1,
                            'animate__animated animate__flash animate__delay-200ms':
                                currentIndex === 0,
                        },
                    )}
                    alt=""
                    onClick={() => changeSlide(1)}
                />
            </div>
            <div className="w-[50px] h-[1px] bg-white absolute top-[74px] left-[97px] z-[-1] transform rotate-[-10deg] origin-left"></div>
            <div>
                <div
                    className={classNames('hidden', {
                        '!block  animate__animated animate__flash':
                            currentIndex === 2,
                    })}
                >
                    <span className="text-[#FFD78E] text-[12px] absolute top-[70px] left-[120px] z-[9]">
                        {currentTime}
                    </span>

                    <ImageLazy
                        src={currentIcon}
                        alt=""
                        boxClassName="absolute top-[53px] left-[130px] z-[11]"
                        imageClassName="w-[20px]"
                        iconClasssName="w-[10px]"
                        boxIconClassName="w-[20px]  h-[20px] rounded-[2px]"
                    />
                </div>
                <img
                    src={point01}
                    className={classNames(
                        'absolute top-[53px] left-[130px] z-[9] ',
                        {
                            hidden: currentIndex === 2,
                            'animate__animated animate__flash animate__delay-200ms':
                                currentIndex === 0,
                        },
                    )}
                    alt=""
                    onClick={() => changeSlide(2)}
                />
            </div>
            <div className="w-[43px] h-[1px] bg-white absolute top-[65px] left-[145px] z-[-1] transform rotate-[-58deg] origin-left"></div>
            <div>
                <div
                    className={classNames('hidden', {
                        '!block  animate__animated animate__flash':
                            currentIndex === 3,
                    })}
                >
                    <span className="text-[#FFD78E] text-[12px] absolute top-[6px] left-[140px] z-[9]">
                        {currentTime}
                    </span>

                    <ImageLazy
                        src={currentIcon}
                        alt=""
                        boxClassName="absolute top-[22px] left-[154px] z-[11]"
                        imageClassName="w-[20px]"
                        iconClasssName="w-[10px]"
                        boxIconClassName="w-[20px]  h-[20px] rounded-[2px]"
                    />
                </div>
                <img
                    src={point01}
                    className={classNames(
                        'absolute top-[16px] left-[154px] z-[9] ',
                        {
                            hidden: currentIndex === 3,
                            'animate__animated animate__flash animate__delay-200ms':
                                currentIndex === 0,
                        },
                    )}
                    alt=""
                    onClick={() => changeSlide(3)}
                />
            </div>
            <div className="w-[40px] h-[1px] bg-white absolute top-[29px] left-[167px] z-[-1] transform rotate-[-20deg] origin-left"></div>
            <div>
                <div
                    className={classNames('hidden', {
                        '!block  animate__animated animate__flash':
                            currentIndex === 4,
                    })}
                >
                    <span className="text-[#FFD78E] text-[12px] absolute top-[-9px] left-[180px] z-[9]">
                        {currentTime}
                    </span>

                    <ImageLazy
                        src={currentIcon}
                        alt=""
                        boxClassName="absolute top-[8px] left-[190px] z-[11]"
                        imageClassName="w-[20px]"
                        iconClasssName="w-[10px]"
                        boxIconClassName="w-[20px]  h-[20px] rounded-[2px]"
                    />
                </div>
                <img
                    src={point01}
                    className={classNames(
                        'absolute top-[2px] left-[192px] z-[9] ',
                        {
                            hidden: currentIndex === 4,
                            'animate__animated animate__flash animate__delay-200ms':
                                currentIndex === 0,
                        },
                    )}
                    alt=""
                    onClick={() => changeSlide(4)}
                />
            </div>
            <div className="w-[40px] h-[1px] bg-white absolute top-[15px] left-[206px] z-[-1] transform rotate-[20deg] origin-left"></div>
            <div>
                <div
                    className={classNames('hidden', {
                        '!block  animate__animated animate__flash':
                            currentIndex === 5,
                    })}
                >
                    <span className="text-[#FFD78E] text-[12px] absolute top-[0px] left-[217px] z-[9]">
                        {currentTime}
                    </span>

                    <ImageLazy
                        src={currentIcon}
                        alt=""
                        boxClassName="absolute top-[18px] left-[230px] z-[11]"
                        imageClassName="w-[20px]"
                        iconClasssName="w-[10px]"
                        boxIconClassName="w-[20px]  h-[20px] rounded-[2px]"
                    />
                </div>
                <img
                    src={point01}
                    className={classNames(
                        'absolute top-[16px] left-[232px] z-[9] ',
                        {
                            hidden: currentIndex === 5,
                            'animate__animated animate__flash animate__delay-200ms':
                                currentIndex === 0,
                        },
                    )}
                    alt=""
                    onClick={() => changeSlide(5)}
                />
            </div>
            <div className="w-[47px] h-[1px] bg-white absolute top-[29px] left-[244px] z-[-1] transform rotate-[-10deg] origin-left"></div>
            <div>
                <div
                    className={classNames('hidden', {
                        '!block  animate__animated animate__flash':
                            currentIndex === 6,
                    })}
                >
                    <p className="text-[#FFD78E] text-[12px] absolute top-[34px] left-[267px] z-[9]">
                        {t('home-course-title-07-content1')} <br />
                        {t('home-course-title-07-content2')}
                    </p>

                    <ImageLazy
                        src={currentIcon}
                        alt=""
                        boxClassName="absolute top-[6px] left-[276px] z-[11]"
                        imageClassName="w-[20px]"
                        iconClasssName="w-[10px]"
                        boxIconClassName="w-[20px]  h-[20px] rounded-[2px]"
                    />
                </div>
                <img
                    src={point02}
                    className={classNames(
                        'absolute top-[6px] left-[276px] z-[9] ',
                        {
                            hidden: currentIndex === 6,
                            'animate__animated animate__flash animate__delay-200ms':
                                currentIndex === 0,
                        },
                    )}
                    alt=""
                    onClick={() => changeSlide(6)}
                />
            </div>
        </div>
    );
};
