import React, { FC } from 'react';

type MemberContentProps = {};

export const MemberContent: FC<MemberContentProps> = (props) => {
    const contentList = [
        {
            title: '贵宾专属身份识别卡，账户安全加码',
            image: require('@/assets/images/test/member-banner.png').default,
        },
        {
            title: '贵宾专属身份识别卡，账户安全加码',
            image: require('@/assets/images/test/member-banner.png').default,
        },
        {
            title: '贵宾专属身份识别卡，账户安全加码',
            image: require('@/assets/images/test/member-banner.png').default,
        },
        {
            title: '贵宾专属身份识别卡，账户安全加码',
            image: require('@/assets/images/test/member-banner.png').default,
        },
        {
            title: '贵宾专属身份识别卡，账户安全加码',
            image: require('@/assets/images/test/member-banner.png').default,
        },
    ];
    return (
        <div className="w-full p-[20px] bg-[#181818]">
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
    );
};
