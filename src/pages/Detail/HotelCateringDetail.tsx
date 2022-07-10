import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    storeHotelDetail,
    storeCateringDetail,
    selectHotelDetail,
    selectCateringDetail,
} from '@/store/hotelCatering/hotelCateringSlice';
import NavBar from '@/components/NavBar';
import IntroductionText from './Common/IntroductionText';
import IntroductionImage from './Common/IntroductionImage';
import IntroductionSingleImageText from './Common/IntroductionSingleImageText';

type HotelCateringDetailProps = {};

const HotelCateringDetail: FC<HotelCateringDetailProps> = (props) => {
    const dispatch = useDispatch();
    const { id, category } = useParams<{ id: string; category: string }>();
    const hotelContent = useSelector(selectHotelDetail);
    const cateringContent = useSelector(selectCateringDetail);
    const getHotelDetail = () => {
        dispatch(storeHotelDetail(id));
    };
    const getCateringDetail = () => {
        dispatch(storeCateringDetail(id));
    };

    const { t } = useTranslation();
    useEffect(() => {
        if (category === '1') {
            getHotelDetail();
        } else if (category === '2') {
            getCateringDetail();
        }
    }, []);
    return (
        <div className="w-full p-[20px] bg-[#181818]">
            <NavBar title={t('detail-title-hotel-catering')}></NavBar>
            {category === '1' && Object.keys(hotelContent).length > 0 && (
                <>
                    <IntroductionText
                        title={hotelContent.hotelName}
                        stars={hotelContent.stars}
                        content2={[
                            {
                                contentItem: hotelContent.hotelDescription,
                            },
                        ]}
                        content3={[
                            {
                                contentItem: `${t(
                                    'detail-text-vip-hot-line',
                                )}: ${hotelContent.phone}`,
                            },
                            {
                                contentItem: `${t('detail-text-address')}: ${
                                    hotelContent.address
                                }`,
                            },

                            {
                                contentItem: `${t(
                                    'detail-text-is-in-venue',
                                )}: ${
                                    hotelContent.inSide
                                        ? t('detail-text-yes')
                                        : t('detail-text-no')
                                }`,
                            },
                        ]}
                    ></IntroductionText>
                    <IntroductionSingleImageText
                        imageTextLsit={hotelContent.hotelImageList}
                    ></IntroductionSingleImageText>
                </>
            )}
            {category === '2' && Object.keys(cateringContent).length > 0 && (
                <>
                    <IntroductionText
                        title={cateringContent.cateringName}
                        stars={cateringContent.stars}
                        content1={cateringContent.foodTypeList}
                        content2={[
                            {
                                contentItem:
                                    cateringContent.cateringDescription,
                            },
                        ]}
                        content3={[
                            {
                                contentItem: `${t('detail-text-open-time')}: ${
                                    cateringContent.openTime
                                }`,
                            },
                            {
                                contentItem: `${t(
                                    'detail-text-vip-hot-line',
                                )}: ${cateringContent.phone}`,
                            },
                            {
                                contentItem: `${t('detail-text-address')}: ${
                                    cateringContent.address
                                }`,
                            },

                            {
                                contentItem: `${t(
                                    'detail-text-is-in-venue',
                                )}: ${
                                    cateringContent.inSide
                                        ? t('detail-text-yes')
                                        : t('detail-text-no')
                                }`,
                            },
                        ]}
                    ></IntroductionText>
                    <h2 className="text-[#FFD78E] text-[20px] mt-[30px]">
                        {t('detail-text-open-dish')}
                    </h2>
                    {cateringContent.cateringImageList?.map((item, index) => (
                        <IntroductionImage
                            imageList={item.list}
                            swiperId={index + 1}
                            key={index}
                        ></IntroductionImage>
                    ))}
                </>
            )}
        </div>
    );
};

export default HotelCateringDetail;
