import React, { FC } from 'react';

interface ImageTextItem {
    image: string;
    title: string;
    description: string;
}
type IntroductionSingleImageTextProps = {
    imageTextLsit: ImageTextItem[];
};

const IntroductionSingleImageText: FC<IntroductionSingleImageTextProps> = ({
    imageTextLsit,
}) => {
    return (
        <div className="w-full flex flex-col items-center">
            {imageTextLsit?.map((item, index) => (
                <div
                    key={index}
                    className="border-t border-solid border-[#404040] w-full py-[30px]"
                >
                    <div className="w-[374px] h-[180px]">
                        <img
                            src={item.image}
                            className="image-object-fit rounded-[8px]"
                            alt=""
                        />
                    </div>
                    <h4 className="text-[#FFD78E] text-[12px] my-[10px]">
                        {item.title}
                    </h4>
                    <p className="text-[#BFA983] text-[12px]">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default IntroductionSingleImageText;
