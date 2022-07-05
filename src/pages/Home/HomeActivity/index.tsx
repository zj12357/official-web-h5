import React from 'react';
import { useTranslation } from 'react-i18next';

export const HomeActivity = () => {
    const { t } = useTranslation();
    const activityList = [
        {
            currentIndex: 1,
            image: require('@/assets/images/home/home-activity-01.png').default,
        },
        {
            currentIndex: 2,
            image: require('@/assets/images/home/home-activity-02.png').default,
        },
        {
            currentIndex: 3,
            image: require('@/assets/images/home/home-activity-03.png').default,
        },
        {
            currentIndex: 4,
            image: require('@/assets/images/home/home-activity-04.png').default,
        },
        {
            currentIndex: 5,
            image: require('@/assets/images/home/home-activity-05.png').default,
        },
        {
            currentIndex: 6,
            image: require('@/assets/images/home/home-activity-06.png').default,
        },
    ];
    return (
        <div className="w-full p-[20px] h-full">
            <h1 className="text-[24px] text-[#FFD78E] py-[20px] not-last-child-border">
                {t('home-activity-title')}
            </h1>
            <div className="w-full pb-[100px]">
                {activityList.map((item) => (
                    <img
                        src={item.image}
                        className="w-full mt-[20px]"
                        key={item.currentIndex}
                    />
                ))}
            </div>
        </div>
    );
};
