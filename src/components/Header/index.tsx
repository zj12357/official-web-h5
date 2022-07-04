/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setNavMenuOpen, setLangMenuOpen } from '@/store/common/commonSlice';
import { RightMenu } from '../RightMenu';
import { LanguageMenu } from '../LanguageMenu';

type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
    const dispatch = useDispatch();
    const handleNavOpen = () => {
        dispatch(setNavMenuOpen(true));
        dispatch(setLangMenuOpen(false));
    };
    const handleLangOpen = () => {
        dispatch(setLangMenuOpen(true));
    };
    return (
        <header>
            <div className="w-full h-[70px] bg-[#202020] flex justify-between items-center px-[20px]">
                <img
                    src={
                        require('@/assets/images/icons/header-logo-icon.svg')
                            .default
                    }
                    alt=""
                />

                <div className="flex items-center">
                    <img
                        src={
                            require('@/assets/images/icons/language-icon.svg')
                                .default
                        }
                        alt=""
                        className="mr-[30px]"
                        onClick={handleLangOpen}
                    />
                    <img
                        src={
                            require('@/assets/images/icons/right-menu-icon.svg')
                                .default
                        }
                        alt=""
                        onClick={handleNavOpen}
                    />
                </div>
            </div>
            <RightMenu></RightMenu>
            <LanguageMenu></LanguageMenu>
        </header>
    );
};

export default Header;
