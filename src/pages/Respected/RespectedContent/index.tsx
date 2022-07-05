import React, { FC, Fragment } from 'react';

type RespectedContentProps = {};

export const RespectedContent: FC<RespectedContentProps> = (props) => {
    const contentList = [
        {
            icon: require('@/assets/images/test/respected-title-icon.svg')
                .default,
            title: '新濠天地',
            image: require('@/assets/images/test/respected-banner.png').default,
            phone: '贵宾热线：+63 999 936 7777',
            address:
                '详细地址：Entertainment City, corner Macapagal Ave, Aseana Ave, Parañaque, 1701 Metro Manila',
            games: [
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
            ],
        },
        {
            icon: require('@/assets/images/test/respected-title-icon.svg')
                .default,
            title: '新濠天地',
            image: require('@/assets/images/test/respected-banner.png').default,
            phone: '贵宾热线：+63 999 936 7777',
            address:
                '详细地址：Entertainment City, corner Macapagal Ave, Aseana Ave, Parañaque, 1701 Metro Manila',
            games: [
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
            ],
        },
        {
            icon: require('@/assets/images/test/respected-title-icon.svg')
                .default,
            title: '新濠天地',
            image: require('@/assets/images/test/respected-banner.png').default,
            phone: '贵宾热线：+63 999 936 7777',
            address:
                '详细地址：Entertainment City, corner Macapagal Ave, Aseana Ave, Parañaque, 1701 Metro Manila',
            games: [
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
            ],
        },
        {
            icon: require('@/assets/images/test/respected-title-icon.svg')
                .default,
            title: '新濠天地',
            image: require('@/assets/images/test/respected-banner.png').default,
            phone: '贵宾热线：+63 999 936 7777',
            address:
                '详细地址：Entertainment City, corner Macapagal Ave, Aseana Ave, Parañaque, 1701 Metro Manila',
            games: [
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
                {
                    gameIcon:
                        require('@/assets/images/test/respected-game-icon.svg')
                            .default,
                    gameName: '多币种百家乐',
                },
            ],
        },
    ];
    return (
        <div className="w-full p-[20px] bg-[#181818]">
            {contentList.map((item, index) => (
                <div
                    className="w-full border-b border-solid border-[#404040] pt-[20px] pb-[10px]"
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
                            src={item.image}
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
                        {Array.from(Array(item.games.length - 1).keys()).map(
                            (i) => (
                                <i className="w-[25%]" key={i}></i>
                            ),
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};
