import React, { FC, useEffect } from 'react';
import { HomeCourse } from './HomeCourse';

type HomeProps = {};

const Home: FC<HomeProps> = (props) => {
    return (
        <div className="relative">
            <HomeCourse></HomeCourse>
        </div>
    );
};

export default Home;
