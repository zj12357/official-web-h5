import React, { FC } from 'react';
import starIcon from '@/assets/images/icon/star-icon.svg';
import starActiveIcon from '@/assets/images/icon/star-active-icon.svg';

type StarsProps = {
    count: number;
};

const Stars: FC<StarsProps> = ({ count }) => {
    const starsList = Array.from(Array(5 - count).keys());
    const starsActiveList = Array.from(Array(count).keys());

    return (
        <div className="flex items-center">
            {starsList.map((item) => {
                return (
                    <img
                        src={starIcon}
                        className="w-[16px] mx-[1px]"
                        alt=""
                        key={item}
                    />
                );
            })}
            {starsActiveList.map((item) => {
                return (
                    <img
                        src={starActiveIcon}
                        className="w-[16px] mx-[1px]"
                        alt=""
                        key={item}
                    />
                );
            })}
        </div>
    );
};

export default Stars;
