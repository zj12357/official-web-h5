import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import point01 from '@/assets/images/icon/point-01-icon.svg';
import point02 from '@/assets/images/icon/point-02-icon.svg';
import point01a from '@/assets/images/icon/point-active-01-icon.svg';
import point02a from '@/assets/images/icon/point-active-02-icon.svg';
import point03a from '@/assets/images/icon/point-active-03-icon.svg';
import point04a from '@/assets/images/icon/point-active-04-icon.svg';
import point05a from '@/assets/images/icon/point-active-05-icon.svg';
import point06a from '@/assets/images/icon/point-active-06-icon.svg';
import point07a from '@/assets/images/icon/point-active-07-icon.svg';

type PointlayputProps = {
    currentIndex: number;
};

export const Pointlayput: FC<PointlayputProps> = ({
    currentIndex,
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
                    <span className="text-[#FFD78E] text-[12px] absolute top-[10px] left-[40px] z-[9]">
                        2021.09
                    </span>
                    <img
                        src={point01a}
                        className="absolute top-[20px] left-[50px] z-[11]"
                        alt=""
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
                />
            </div>
            <div className="w-[39px] h-[1px] bg-white absolute top-[42px] left-[70px] z-[-1] transform rotate-[50deg] origin-left"></div>
            <div>
                <div
                    className={classNames('hidden', {
                        '!block  animate__animated animate__flash':
                            currentIndex === 1,
                    })}
                >
                    <span className="text-[#FFD78E] text-[12px] absolute top-[80px] left-[74px] z-[9]">
                        2021.10
                    </span>
                    <img
                        src={point02a}
                        className="absolute top-[60px] left-[83px] z-[11]"
                        alt=""
                    />
                </div>
                <img
                    src={point01}
                    className={classNames(
                        'absolute top-[60px] left-[83px] z-[9]',
                        {
                            hidden: currentIndex === 1,
                        },
                    )}
                    alt=""
                />
            </div>
            <div className="w-[52px] h-[1px] bg-white absolute top-[74px] left-[95px] z-[-1] transform rotate-[-10deg] origin-left"></div>
            <div>
                <div
                    className={classNames('hidden', {
                        '!block  animate__animated animate__flash':
                            currentIndex === 2,
                    })}
                >
                    <span className="text-[#FFD78E] text-[12px] absolute top-[70px] left-[120px] z-[9]">
                        2022.03
                    </span>
                    <img
                        src={point03a}
                        className="absolute top-[53px] left-[130px] z-[11]"
                        alt=""
                    />
                </div>
                <img
                    src={point01}
                    className={classNames(
                        'absolute top-[53px] left-[130px] z-[9]',
                        {
                            hidden: currentIndex === 2,
                        },
                    )}
                    alt=""
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
                        2021.11
                    </span>
                    <img
                        src={point04a}
                        className="absolute top-[16px] left-[154px] z-[11]"
                        alt=""
                    />
                </div>
                <img
                    src={point01}
                    className={classNames(
                        'absolute top-[16px] left-[154px] z-[9]',
                        {
                            hidden: currentIndex === 3,
                        },
                    )}
                    alt=""
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
                        2022.05
                    </span>
                    <img
                        src={point05a}
                        className="absolute top-[0px] left-[190px] z-[11]"
                        alt=""
                    />
                </div>
                <img
                    src={point01}
                    className={classNames(
                        'absolute top-[2px] left-[192px] z-[9]',
                        {
                            hidden: currentIndex === 4,
                        },
                    )}
                    alt=""
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
                    <span className="text-[#FFD78E] text-[12px] absolute top-[0px] left-[223px] z-[9]">
                        2022.07-08
                    </span>
                    <img
                        src={point06a}
                        className="absolute top-[14px] left-[230px] z-[11]"
                        alt=""
                    />
                </div>
                <img
                    src={point01}
                    className={classNames(
                        'absolute top-[16px] left-[232px] z-[9]',
                        {
                            hidden: currentIndex === 5,
                        },
                    )}
                    alt=""
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
                    <img
                        src={point07a}
                        className="absolute top-[6px] left-[276px] z-[11]"
                        alt=""
                    />
                </div>
                <img
                    src={point02}
                    className={classNames(
                        'absolute top-[6px] left-[276px] z-[9]',
                        {
                            hidden: currentIndex === 6,
                        },
                    )}
                    alt=""
                />
            </div>
        </div>
    );
};
