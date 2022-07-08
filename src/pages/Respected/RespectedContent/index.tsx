import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectHallList } from '@/store/respected/respectedSlice';

type RespectedContentProps = {};

export const RespectedContent: FC<RespectedContentProps> = (props) => {
    const contentList = useSelector(selectHallList);

    return (
        <div className="w-full p-[20px] bg-[#181818]">
            <div className="w-full pt-[10px]">
                {contentList.map((item, index) => (
                    <div
                        className="w-full not-last-child-border pt-[20px] pb-[10px]"
                        key={index}
                    >
                        <div className="flex items-center wow animate__animated animate__fadeInUp animate__fadeInUp animate__delay-200ms">
                            <img
                                src={item.icon}
                                alt=""
                                className="h-[24px] mr-[10px]"
                            />
                            <span className="text-[#FFD78E] text-[24px]">
                                {item.title}
                            </span>
                        </div>
                        <div className="w-[374px] h-[180px] my-[20px] wow animate__animated animate__fadeInUp animate__delay-300ms">
                            <img
                                src={item.coverImage}
                                alt=""
                                className="image-object-fit"
                            />
                        </div>

                        <p className="text-[12px] text-[#BFA983] mb-[10px] wow animate__animated animate__fadeInUp animate__delay-400ms">
                            {item.phone}
                        </p>
                        <p className="text-[12px] text-[#BFA983] wow animate__animated animate__fadeInUp animate__delay-400ms">
                            {item.address}
                        </p>
                        <div className="flex  justify-between flex-wrap mt-[20px] wow animate__animated animate__fadeInUp animate__delay-500ms">
                            {item.games.map((game, gIndex) => (
                                <Fragment key={gIndex}>
                                    <div className="flex flex-col justify-center items-center mb-[20px] w-[25%]">
                                        <img
                                            src={game.gameIcon}
                                            alt=""
                                            className="w-[40px] mb-[10px]"
                                        />
                                        <span className="text-[#BFA983] text-[12px]">
                                            {game.gameName}
                                        </span>
                                    </div>
                                </Fragment>
                            ))}
                            {Array.from(
                                Array(item.games.length - 1).keys(),
                            ).map((i) => (
                                <i className="w-[25%]" key={i}></i>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
