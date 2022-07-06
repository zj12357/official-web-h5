import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

type NavBarProps = {
    title: string;
};

const NavBar: FC<NavBarProps> = ({ title }) => {
    const history = useHistory();
    const backPage = () => {
        history.goBack();
    };
    return (
        <div className="w-full h-[70px] bg-[#202020] fixed z-[99] left-0 top-0 right-0 px-[20px]">
            <div className="w-full h-full flex items-center" onClick={backPage}>
                <img
                    src={require('@/assets/images/icon/back-icon.svg').default}
                    alt=""
                    className="mr-[10px]"
                />
                <span className="text-[#FFD78E] text-[14px]">{title}</span>
            </div>
        </div>
    );
};

export default NavBar;
