/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import React, { FC } from 'react';
import { RightMenu } from '../RightMenu';

type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
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
                    />
                    <img
                        src={
                            require('@/assets/images/icons/right-menu-icon.svg')
                                .default
                        }
                        alt=""
                    />
                </div>
            </div>
            <RightMenu></RightMenu>
        </header>
    );
};

export default Header;
