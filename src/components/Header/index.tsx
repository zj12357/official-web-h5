/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setNavMenuOpen, setLangMenuOpen } from '@/store/common/commonSlice';
import { RightMenu } from '../RightMenu';
import { LanguageMenu } from '../LanguageMenu';

type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleNavOpen = () => {
        dispatch(setNavMenuOpen(true));
    };
    const handleLangOpen = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.stopPropagation();
        dispatch(setLangMenuOpen(true));
    };
    const toHome = () => {
        history.push('/');
    };
    return (
        <header
            className="fixed top-0 left-0 right-0 z-[99]"
            onClick={() => {
                dispatch(setLangMenuOpen(false));
            }}
        >
            <div className="w-full h-[70px] bg-[#202020] flex justify-between items-center px-[20px]">
                <img
                    src={
                        require('@/assets/images/header/header-logo-icon.svg')
                            .default
                    }
                    alt=""
                    className="w-[89px]"
                    onClick={toHome}
                />

                <div className="flex items-center">
                    <img
                        src={
                            require('@/assets/images/header/language-icon.svg')
                                .default
                        }
                        alt=""
                        className="mr-[30px] w-[18px]"
                        onClick={handleLangOpen}
                    />
                    <img
                        src={
                            require('@/assets/images/header/right-menu-icon.svg')
                                .default
                        }
                        alt=""
                        className="w-[18px]"
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
