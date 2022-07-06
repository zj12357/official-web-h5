import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import NavBar from '@/components/NavBar';
import IntroductionText from './Common/IntroductionText';
import IntroductionImage from './Common/IntroductionImage';

type ShoppingDetailProps = {};

const ShoppingDetail: FC<ShoppingDetailProps> = (props) => {
    const { t } = useTranslation();
    return (
        <div className="w-full p-[20px] bg-[#181818]">
            <NavBar title={t('detail-title-hotel-catering')}></NavBar>
            <IntroductionText
                title="NOBU酒店"
                stars={3}
                content1={[
                    {
                        contentItem: '中餐·川菜',
                    },
                ]}
                content2={[
                    {
                        contentItem:
                            '由屡获殊荣的厨师Raymond Young 经营 五行遵循北京风格，在传统的北京烤炉中烤制， 并使用星苹果木来帮助突出其风味和香气。出锅前风干，外皮酥脆，肉质更嫩。 OKBET邀您来WU XING品尝正宗北京宫廷菜的美味。',
                    },
                ]}
                content3={[
                    {
                        contentItem:
                            '营业时间：11:30AM-2:30PM / 5:30PM-10:30PM',
                    },
                    {
                        contentItem: ' 贵宾热线：+63 909 243 0988 ',
                    },
                    {
                        contentItem: '详细地址：克拉克万豪酒店大堂层',
                    },
                    {
                        contentItem: '是否在场馆：是',
                    },
                ]}
            ></IntroductionText>
            <IntroductionImage
                imageList={[
                    {
                        url: require('@/assets/images/test/detail-01.png')
                            .default,
                        title: '豪华房 37平米',
                        content:
                            'Nobu 豪华客房享有壮丽的景色，融合了优雅、现代的日式内饰的豪华氛围。它提供了一个安静的休憩之所，舒适和放松是最优先考虑的。',
                    },
                    {
                        url: require('@/assets/images/test/detail-01.png')
                            .default,
                        title: '豪华房 37平米',
                        content:
                            'Nobu 豪华客房享有壮丽的景色，融合了优雅、现代的日式内饰的豪华氛围。它提供了一个安静的休憩之所，舒适和放松是最优先考虑的。',
                    },
                    {
                        url: require('@/assets/images/test/detail-01.png')
                            .default,
                        title: '豪华房 37平米',
                        content:
                            'Nobu 豪华客房享有壮丽的景色，融合了优雅、现代的日式内饰的豪华氛围。它提供了一个安静的休憩之所，舒适和放松是最优先考虑的。',
                    },
                ]}
            ></IntroductionImage>
        </div>
    );
};

export default ShoppingDetail;
