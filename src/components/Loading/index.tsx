/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import React, { FC, memo } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import { base64Image } from './base64Image';
import './index.scoped.scss';
interface Props {}

const Loading: FC<Props> = (props) => {
    return (
        <div className="m-loading">
            <img src={base64Image} alt="" className="w-[64px] mb-[20px]" />
            <BarLoader width={100} color="#FFD78E" loading></BarLoader>
        </div>
    );
};

export default memo(Loading);
