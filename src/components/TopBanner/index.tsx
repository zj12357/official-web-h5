import React, { FC } from 'react';

type TopBannerProps = {
    title: string;
    backgroundImage: string;
};

export const TopBanner: FC<TopBannerProps> = ({
    title,
    backgroundImage,
}: TopBannerProps) => {
    return (
        <div
            className="bg-cover bg-no-repeat bg-top w-[100%] h-[450px] relative"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <h2 className="text-white text-[40px] absolute bottom-[70px] left-[20px] z-[9] wow animate__animated animate__fadeInUp">
                {title}
            </h2>
        </div>
    );
};
