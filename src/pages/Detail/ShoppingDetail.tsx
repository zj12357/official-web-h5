import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import NavBar from '@/components/NavBar';
import {
    storeShoppingDetail,
    selectShoppingDetail,
} from '@/store/shopping/shoppingSlice';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import IntroductionText from './Common/IntroductionText';
import IntroductionImage from './Common/IntroductionImage';

type ShoppingDetailProps = {};

const ShoppingDetail: FC<ShoppingDetailProps> = (props) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const detailContent = useSelector(selectShoppingDetail);

    useEffect(() => {
        dispatch(storeShoppingDetail(id));
    }, []);
    return (
        <div className="w-full p-[20px] bg-[#181818]">
            <NavBar title={t('detail-title-shopping')}></NavBar>
            {Object.keys(detailContent).length > 0 && (
                <>
                    <IntroductionText
                        title={detailContent.placeName}
                        content2={[
                            {
                                contentItem: detailContent.placeDescription,
                            },
                        ]}
                        content3={[
                            {
                                contentItem: `${t('detail-text-open-time')}:${
                                    detailContent.openTime
                                }${t('detail-text-hours')}`,
                            },

                            {
                                contentItem: `${t('detail-text-address')}:${
                                    detailContent.address
                                }`,
                            },
                        ]}
                    ></IntroductionText>

                    <IntroductionImage
                        imageList={detailContent.placeImageList}
                        swiperId={new Date().getTime()}
                    ></IntroductionImage>
                    <h2 className="text-[#FFD78E] text-[20px] mt-[30px]">
                        {t('detail-text-service-items')}
                    </h2>
                    {detailContent.projectImageList?.map((item, index) => (
                        <IntroductionImage
                            swiperId={index + 1}
                            key={index}
                            imageList={item.list}
                        ></IntroductionImage>
                    ))}
                </>
            )}
        </div>
    );
};

export default ShoppingDetail;
