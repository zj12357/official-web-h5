import React, { FC } from 'react';
import Stars from '@/components/Stars';

interface contentItemType {
    contentItem: string;
}
type IntroductionTextProps = {
    title: string;
    stars?: number;
    content1?: contentItemType[];
    content2?: contentItemType[];
    content3?: contentItemType[];
};

const IntroductionText: FC<IntroductionTextProps> = ({
    title,
    stars,
    content1,
    content2,
    content3,
}) => {
    return (
        <div className="w-full pb-[20px] pt-[30px]">
            <div className="w-full flex justify-between items-center wow animate__animated animate__fadeInUp animate__delay-200ms">
                <h3 className="text-[#FFD78E] text-[20px]">{title}</h3>
                {stars && <Stars count={3}></Stars>}
            </div>
            {content1 && (
                <div className="mt-[20px]">
                    {content1?.map((text, index) => (
                        <p
                            key={index}
                            className="text-[#BFA983] text-[12px] wow animate__animated animate__fadeInUp animate__delay-300ms"
                        >
                            {text.contentItem}
                        </p>
                    ))}
                </div>
            )}
            {content2 && (
                <div className="mt-[20px]">
                    {content2?.map((text, index) => (
                        <p
                            key={index}
                            className="text-[#BFA983] text-[12px] wow animate__animated animate__fadeInUp animate__delay-400ms"
                        >
                            {text.contentItem}
                        </p>
                    ))}
                </div>
            )}
            {content3 && (
                <div className="mt-[20px]">
                    {content3?.map((text, index) => (
                        <p
                            key={index}
                            className="text-[#BFA983] text-[12px] wow animate__animated animate__fadeInUp animate__delay-500ms"
                        >
                            {text.contentItem}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default IntroductionText;
