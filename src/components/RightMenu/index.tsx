import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

export const RightMenu = () => {
    const { t, i18n } = useTranslation();
    const history = useHistory();
    const langList = [
        {
            name: t('home-page'),
            path: '/home',
            icon: require('@/assets/images/icons/tab-home-icon.svg').default,
        },
        {
            name: t('home-dynamic'),
            path: '/home',
            icon: require('@/assets/images/icons/tab-dynamic-icon.svg').default,
        },
        {
            name: t('home-supreme'),
            path: '/home',
            icon: require('@/assets/images/icons/tab-supreme-icon.svg').default,
        },
        {
            name: t('home-member'),
            path: '/home',
            icon: require('@/assets/images/icons/tab-member-icon.svg').default,
        },
        {
            name: t('home-coffee'),
            path: '/home',
            icon: require('@/assets/images/icons/tab-coffee-icon.svg').default,
        },
        {
            name: t('home-travel-bag'),
            path: '/home',
            icon: require('@/assets/images/icons/tab-travel-bag-icon.svg')
                .default,
        },
        {
            name: t('home-shopping-cart'),
            path: '/home',
            icon: require('@/assets/images/icons/tab-shopping-cart-icon.svg')
                .default,
        },
        {
            name: t('home-gold'),
            path: '/home',
            icon: require('@/assets/images/icons/tab-gold-icon.svg').default,
        },
        {
            name: t('home-recruit'),
            path: '/home',
            icon: require('@/assets/images/icons/tab-recruit-icon.svg').default,
        },
    ];
    return (
        <div className="w-full fixed z-[99] top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black">
            <div className="absolute right-0 top-0 bottom-0 z-[1]">
                <div className="w-[280px] h-[70px] bg-[#202020] flex justify-end items-center">
                    <img
                        src={
                            require('@/assets/images/icons/tab-close-icon.svg')
                                .default
                        }
                        alt=""
                        className="mr-[20px] w-[20px]"
                    />
                </div>
                <nav className="w-[280px] bg-[#202020] min-h-full flex flex-col items-end ">
                    {langList.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center w-[240px] border-b border-[#404040 border-solid py-[17px]"
                        >
                            <img
                                src={item.icon}
                                alt=""
                                className="mr-[20px] w-[24px]"
                            />
                            <span className="text-[#BFA983] text-[14px]">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
};
