import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { storeMemberList } from '@/store/member/memberSlice';
import { TopBanner } from '@/components/TopBanner';
import { MemberContent } from './MemberContent';

type MemberProps = {};

const Member: FC<MemberProps> = (props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(storeMemberList());
    }, []);

    return (
        <div>
            <TopBanner
                title={t('top-banner-title-member')}
                backgroundImage={
                    require('@/assets/images/topBanner/top-banner-member.png')
                        .default
                }
            ></TopBanner>
            <MemberContent></MemberContent>
        </div>
    );
};

export default Member;
