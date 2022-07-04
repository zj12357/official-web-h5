import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectLangMenuOpen,
    setLangMenuOpen,
} from '@/store/common/commonSlice';

export const LanguageMenu = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [currentIndex, setCurrentIndex] = useState(1);

    const menuOpen = useSelector(selectLangMenuOpen);
    const menuList = [
        {
            name: t('header-lang-menu-cn'),
            activeIndex: 1,
        },
        {
            name: t('header-lang-menu-en'),
            activeIndex: 2,
        },
        {
            name: t('header-lang-menu-ko'),
            activeIndex: 3,
        },
    ];

    const handleChangeIndex = (index: number) => {
        setCurrentIndex(index);
    };

    const handleClose = () => {
        dispatch(setLangMenuOpen(false));
    };

    return (
        <>
            {menuOpen && (
                <div
                    className="w-full h-full fixed top-[70px] bottom-0 left-0 right-0 z-[99] "
                    onClick={handleClose}
                >
                    <div className="bg-black bg-opacity-50 w-full  absolute top-0 bottom-0 right-0 left-0 z-[9] flex justify-end">
                        <div className="w-[140px] h-[120px] bg-[#202020] py-[20px]">
                            {menuList.map((item) => (
                                <div
                                    className="w-full h-[30px] pl-[50px] pr-[10px] flex items-center relative"
                                    onClick={() =>
                                        handleChangeIndex(item.activeIndex)
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
                </div>
            )}
        </>
    );
};
