import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectNavMenuOpen, setNavMenuOpen } from '@/store/common/commonSlice';
import classnames from 'classnames';

export const RightMenu = () => {
    const { t } = useTranslation();
    const history = useHistory();
    const dispatch = useDispatch();
    const menuOpen = useSelector(selectNavMenuOpen);
    const menuList = [
        {
            name: t('home-page'),
            path: '/home',
            icon: require('@/assets/images/header/tab-home-icon.svg').default,
        },
        {
            name: t('home-dynamic'),
            path: '/latestNews',
            icon: require('@/assets/images/header/tab-dynamic-icon.svg')
                .default,
        },
        {
            name: t('home-supreme'),
            path: '/respected',
            icon: require('@/assets/images/header/tab-supreme-icon.svg')
                .default,
        },
        {
            name: t('home-member'),
            path: '/member',
            icon: require('@/assets/images/header/tab-member-icon.svg').default,
        },
        {
            name: t('home-coffee'),
            path: '/home',
            icon: require('@/assets/images/header/tab-coffee-icon.svg').default,
        },
        {
            name: t('home-travel-bag'),
            path: '/home',
            icon: require('@/assets/images/header/tab-travel-bag-icon.svg')
                .default,
        },
        {
            name: t('home-shopping-cart'),
            path: '/home',
            icon: require('@/assets/images/header/tab-shopping-cart-icon.svg')
                .default,
        },
        {
            name: t('home-gold'),
            path: '/home',
            icon: require('@/assets/images/header/tab-gold-icon.svg').default,
        },
        {
            name: t('home-recruit'),
            path: '/home',
            icon: require('@/assets/images/header/tab-recruit-icon.svg')
                .default,
        },
    ];

    const handleClose = () => {
        dispatch(setNavMenuOpen(false));
    };

    const toPage = (path: string) => {
        history.push(path);
        handleClose();
    };

    return (
        <>
            <div
                className={classnames(
                    'w-full fixed z-[101] top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black hidden',
                    {
                        '!block': menuOpen,
                    },
                )}
                onClick={handleClose}
            ></div>
            <div
                className={classnames(
                    'fixed right-0 top-0 bottom-0 z-[102]  transition-all scale-x-0 duration-500 origin-right',
                    {
                        'scale-x-100': menuOpen,
                    },
                )}
            >
                <div className="w-[280px] h-[70px] bg-[#202020] flex justify-end items-center">
                    <img
                        src={
                            require('@/assets/images/header/tab-close-icon.svg')
                                .default
                        }
                        alt=""
                        className="mr-[20px] w-[20px]"
                        onClick={handleClose}
                    />
                </div>
                <nav className="w-[280px] bg-[#202020] min-h-full flex flex-col items-end ">
                    {menuList.map((item, index) => (
                        <div
                            key={index}
                            className={classnames(
                                'flex items-center w-[240px] border-b border-[#404040 border-solid py-[17px]',
                                {
                                    'animate__animated animate__fadeInRight':
                                        menuOpen,
                                },
                            )}
                            onClick={() => toPage(item.path)}
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
        </>
    );
};
