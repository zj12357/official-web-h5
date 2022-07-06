import React, { FC } from 'react';
import { HomeCourse } from './HomeCourse';
import { HomeActivity } from './HomeActivity';
import { HomeDynamic } from './HomeDynamic';

type HomeProps = {};

const Home: FC<HomeProps> = (props) => {
    return (
        <div className="relative">
            <div className="w-full bg-[#181818]">
                <HomeCourse></HomeCourse>
                <HomeActivity></HomeActivity>
                <HomeDynamic></HomeDynamic>
            </div>
        </div>
    );
};

export default Home;
