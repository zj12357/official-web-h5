import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './index.scoped.scss';
import { useTranslation } from 'react-i18next';
interface Props {}

const NotFound: FC<Props> = () => {
    const { t } = useTranslation();
    return (
        <div
            className="w-full  bg-[#423F3A] flex flex-col justify-center items-center"
            style={{
                height: `calc(${
                    window.innerHeight ||
                    document.body.clientHeight ||
                    document.documentElement.offsetHeight
                }px - 16.9vw)`,
            }}
        >
            <img
                src={require('@/assets/images/icon/bg-logo-icon.svg').default}
                alt=""
                className="w-[80px]"
            />
            <span className="text-[14px] text-[#FFD78E] mt-[20px]">
                {t('common-not-found')}
            </span>
        </div>
    );
};

export default NotFound;
