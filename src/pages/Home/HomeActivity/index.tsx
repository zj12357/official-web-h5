import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { storePromoList, selectPromoList } from '@/store/home/homeSlice';

export const HomeActivity = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const activityList = useSelector(selectPromoList);
    useEffect(() => {
        dispatch(storePromoList());
    }, []);
    return (
        <div className="w-full p-[20px] h-full mt-[110px]">
            <h1 className="text-[24px] text-[#FFD78E] py-[20px] not-last-child-border">
                {t('home-activity-title')}
            </h1>
            <div className="w-full">
                {activityList?.map((item, index) => (
                    <img
                        src={item.coverImage}
                        className="w-full mt-[20px]"
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};
