import React, { FC, Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
import { selectShoppingList } from '@/store/shopping/shoppingSlice';
import ImageLazy from '@/components/ImageLazy';

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
            name: '奢侈品',
        },
        {
            image: require('@/assets/images/test/shopping-title-icon.svg')
                .default,
            name: '会所',
        },
        {
            image: require('@/assets/images/test/shopping-title-icon.svg')
                .default,
            name: 'KTV',
        },
        {
            image: require('@/assets/images/test/shopping-title-icon.svg')
                .default,
            name: '射击',
        },
        {
            image: require('@/assets/images/test/shopping-title-icon.svg')
                .default,
            name: 'SPA',
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
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
    const handleCurrentIndex = (index: number) => {
        setCurrentIndex(index);
    };
    return (
        <div className="w-full p-[20px] bg-[#181818]">
            <div className="w-full pt-[10px]">
                <div className="w-full flex justify-between flex-wrap wow animate__animated animate__fadeInUp animate__delay-200ms">
                    {tabList.map((item, index) => (
                        <Fragment key={index}>
                            <div
                                className="flex flex-col justify-center items-center w-[25%] mb-[20px]"
                                onClick={() => handleCurrentIndex(index)}
                            >
                                <ImageLazy
                                    src={item.image}
                                    alt=""
                                    boxClassName="mb-[10px]"
                                    imageClassName="h-[24px]"
                                    iconClasssName="w-[20px]"
                                    boxIconClassName="w-[40px] h-[40px]"
                                />

                                <span
                                    className={classnames(
                                        'text-[#C0C0C0] text-[14px]',
                                        {
                                            'text-[#FFD78E]':
                                                currentIndex === index,
                                        },
                                    )}
                                >
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
                            <div className="mb-[10px]">
                                <ImageLazy
                                    boxClassName="w-[184px] h-[180px]"
                                    src={item.image}
                                    alt=""
                                    imageClassName="image-object-fit rounded-[8px]"
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
