import React, { FC, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectShoppingList } from '@/store/shopping/shoppingSlice';

type ShoppingContentProps = {};

export const ShoppingContent: FC<ShoppingContentProps> = (props) => {
    const history = useHistory();
    const shoppingList = useSelector(selectShoppingList);

    const tabList = [
        {
            image: require('@/assets/images/test/shopping-title-icon.svg')
                .default,
            name: '高尔夫',
        },
        {
            image: require('@/assets/images/test/shopping-title-icon.svg')
                .default,
            name: '高尔夫',
        },
        {
            image: require('@/assets/images/test/shopping-title-icon.svg')
                .default,
            name: '高尔夫',
        },
        {
            image: require('@/assets/images/test/shopping-title-icon.svg')
                .default,
            name: '高尔夫',
        },
        {
            image: require('@/assets/images/test/shopping-title-icon.svg')
                .default,
            name: '高尔夫',
        },
    ];
    const contentList = [
        {
            image: require('@/assets/images/test/shopping-01.png').default,
            name: '黎刹公园',
        },
        {
            image: require('@/assets/images/test/shopping-01.png').default,
            name: '黎刹公园',
        },
        {
            image: require('@/assets/images/test/shopping-01.png').default,
            name: '黎刹公园',
        },
        {
            image: require('@/assets/images/test/shopping-01.png').default,
            name: '黎刹公园',
        },
        {
            image: require('@/assets/images/test/shopping-01.png').default,
            name: '黎刹公园',
        },
        {
            image: require('@/assets/images/test/shopping-01.png').default,
            name: '黎刹公园',
        },
        {
            image: require('@/assets/images/test/shopping-01.png').default,
            name: '黎刹公园',
        },
        {
            image: require('@/assets/images/test/shopping-01.png').default,
            name: '黎刹公园',
        },
        {
            image: require('@/assets/images/test/shopping-01.png').default,
            name: '黎刹公园',
        },
        {
            image: require('@/assets/images/test/shopping-01.png').default,
            name: '黎刹公园',
        },
    ];
    const toDetail = (id: number) => {
        history.push(`/shoppingDetail/${id}`);
    };
    return (
        <div className="w-full p-[20px] bg-[#181818]">
            <div className="w-full pt-[10px]">
                <div className="w-full flex justify-between flex-wrap wow animate__animated animate__fadeInUp animate__delay-200ms">
                    {tabList.map((item, index) => (
                        <Fragment key={index}>
                            <div className="flex flex-col justify-center items-center w-[25%] mb-[20px]">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="h-[24px] mb-[10px]"
                                />

                                <span className="text-[#C0C0C0] text-[14px]">
                                    {item.name}
                                </span>
                            </div>
                        </Fragment>
                    ))}
                    {Array.from(Array(tabList.length - 1).keys()).map((i) => (
                        <i key={i} className="w-[25%]"></i>
                    ))}
                </div>
                <div className="my-[20px] w-full flex justify-between flex-wrap">
                    {contentList.map((item, index) => (
                        <div
                            key={index}
                            className="mb-[30px] wow animate__animated animate__fadeInUp animate__delay-300ms"
                            onClick={() => toDetail(1)}
                        >
                            <div className="w-[184px] h-[180px] mb-[10px]">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="image-object-fit"
                                />
                            </div>
                            <span className="text-[#FFD78E] text-[12px]">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
