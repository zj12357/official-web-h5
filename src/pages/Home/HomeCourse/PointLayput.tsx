import React, { FC } from 'react';
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
    return (
        <div className="w-full h-full relative translate-x-[20px]">
            <div>
                <div
                    className={classNames('hidden', {
                        '!block  animate__animated animate__fadeInDown':
                            currentIndex === 0,
                    })}
                >
                    <span className="text-[#FFD78E] text-[12px] absolute top-[10px] left-[40px] z-[9]">
                        2021.09
                    </span>
                    <img
                        src={point01a}
                        className="absolute top-[20px] left-[50px] z-[9]"
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
            <div className="w-[39px] h-[1px] bg-white absolute top-[42px] left-[70px] transform rotate-[50deg] origin-left"></div>
            <div>
                <img
                    src={point01}
                    className="absolute top-[60px] left-[83px] z-[9]"
                    alt=""
                />
            </div>
            <div className="w-[52px] h-[1px] bg-white absolute top-[74px] left-[95px] transform rotate-[-10deg] origin-left"></div>
            <div>
                <img
                    src={point01}
                    className="absolute top-[53px] left-[130px] z-[9]"
                    alt=""
                />
            </div>
            <div className="w-[43px] h-[1px] bg-white absolute top-[65px] left-[145px] transform rotate-[-58deg] origin-left"></div>
            <div>
                <img
                    src={point01}
                    className="absolute top-[16px] left-[154px] z-[9]"
                    alt=""
                />
            </div>
            <div className="w-[40px] h-[1px] bg-white absolute top-[29px] left-[167px] transform rotate-[-20deg] origin-left"></div>
            <div>
                <img
                    src={point01}
                    className="absolute top-[2px] left-[192px] z-[9]"
                    alt=""
                />
            </div>
            <div className="w-[40px] h-[1px] bg-white absolute top-[15px] left-[206px] transform rotate-[20deg] origin-left"></div>
            <div>
                <img
                    src={point01}
                    className="absolute top-[16px] left-[232px] z-[9]"
                    alt=""
                />
            </div>
            <div className="w-[47px] h-[1px] bg-white absolute top-[29px] left-[244px] transform rotate-[-10deg] origin-left"></div>
            <div>
                <img
                    src={point02}
                    className="absolute top-[6px] left-[276px] z-[9]"
                    alt=""
                />
            </div>
        </div>
    );
};
