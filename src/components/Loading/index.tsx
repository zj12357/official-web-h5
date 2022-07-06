/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import React, { FC, memo } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import './index.scoped.scss';
interface Props {}

const Loading: FC<Props> = (props) => {
    return (
        <div className="m-loading">
            <img
                src={require('@/assets/images/icon/bg-logo-icon.svg').default}
                alt=""
                className="w-[64px] mb-[20px]"
            />
            <BarLoader width={100} color="#FFD78E" loading></BarLoader>
        </div>
    );
};

export default memo(Loading);
