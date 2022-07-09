import React, { FC } from 'react';
import BarLoader from 'react-spinners/PropagateLoader';

type PageLoadingProps = {};

const PageLoading: FC<PageLoadingProps> = (props) => {
    return (
        <div className="w-full flex justify-center items-center h-[50px]">
            <BarLoader color="#FFD78E" loading></BarLoader>
        </div>
    );
};

export default PageLoading;
