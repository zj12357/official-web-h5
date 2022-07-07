import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectLangMenuOpen,
    setLangMenuOpen,
} from '@/store/common/commonSlice';
import classnames from 'classnames';
import { changeTimeLocale } from '@/common/timeLocale';

export const LanguageMenu = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    const menuOpen = useSelector(selectLangMenuOpen);
    const menuList = [
        {
            name: t('header-lang-menu-cn'),
            activeIndex: 0,
            lang: 'cn',
            timeLocale: 'zh-cn',
        },
        {
            name: t('header-lang-menu-en'),
            activeIndex: 1,
            lang: 'en',
            timeLocale: 'en',
        },
        {
            name: t('header-lang-menu-ko'),
            activeIndex: 2,
            lang: 'ko',
            timeLocale: 'ko',
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(
        menuList.findIndex((item) => item.lang === (i18n.language ?? 'cn')),
    );

    const handleChangeIndex = (
        index: number,
        lang: string,
        timeLocale: string,
    ) => {
        setCurrentIndex(index);
        changeLanguage(lang);
        handleTimeLocale(timeLocale);
    };

    const handleClose = () => {
        dispatch(setLangMenuOpen(false));
    };

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        Promise.resolve().then(() => {
            window.location.reload();
        });
    };

    const handleTimeLocale = (timeLocale: string) => {
        changeTimeLocale(timeLocale);
    };

    return (
        <>
            <div
                className={classnames(
                    'w-full h-full fixed top-[70px] bottom-0 left-0 right-0 z-[99] hidden bg-black bg-opacity-50',
                    {
                        '!block': menuOpen,
                    },
                )}
                onClick={handleClose}
            ></div>
            <div
                className={classnames(
                    'w-full  fixed top-[70px] bottom-0 right-0 left-0 z-[100] flex justify-end transition-all scale-y-0 duration-500 origin-top',
                    {
                        '!scale-y-100': menuOpen,
                    },
                )}
            >
                <div className="w-[140px] h-[120px] bg-[#202020] py-[20px]">
                    {menuList.map((item) => (
                        <div
                            className="w-full h-[30px] pl-[50px] pr-[10px] flex items-center relative"
                            onClick={() =>
                                handleChangeIndex(
                                    item.activeIndex,
                                    item.lang,
                                    item.timeLocale,
                                )
                            }
                            key={item.activeIndex}
                        >
                            {currentIndex === item.activeIndex && (
                                <img
                                    src={
                                        require('@/assets/images/header/lang-menu-active-icon.svg')
                                            .default
                                    }
                                    alt=""
                                    className="absolute top-[50%] left-[20px]  translate-y-[-50%] z-[9] w-[15px]"
                                />
                            )}

                            <span className="text-[14px] text-[#FFD78E]">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
