import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectMemberList } from '@/store/member/memberSlice';

type MemberContentProps = {};

export const MemberContent: FC<MemberContentProps> = (props) => {
    const contentList = useSelector(selectMemberList);

    return (
        <div className="w-full p-[20px] bg-[#181818]">
            <div className="w-full pt-[10px]">
                {contentList.map((item, index) => (
                    <div
                        className="w-full not-last-child-border py-[20px] "
                        key={index}
                    >
                        <h2 className="text-[#FFD78E] text-[20px] mt-[10px]  mb-[20px] wow animate__animated animate__fadeInUp animate__delay-200ms">
                            {item.title}
                        </h2>
                        <div className="w-[374px] h-[180px] mb-[10px] wow animate__animated animate__fadeInUp animate__delay-300ms">
                            <img
                                src={item.image}
                                className="image-object-fit"
                                alt=""
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
