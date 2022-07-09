import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { storeMemberList } from '@/store/member/memberSlice';
import { TopBanner } from '@/components/TopBanner';
import { MemberContent } from './MemberContent';
import _ from 'lodash';

type MemberProps = {};

const Member: FC<MemberProps> = (props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [params, setParams] = useState({
        page: 1,
        size: 10,
    });

    const changePage = () => {
        setParams((prev) => ({
            ...prev,
            page: (prev.page += 1),
        }));
    };

    useEffect(() => {
        _.debounce(() => dispatch(storeMemberList(params)), 300)();
    }, [params]);

    return (
        <div>
            <TopBanner
                title={t('top-banner-title-member')}
                backgroundImage={
                    require('@/assets/images/topBanner/top-banner-member.png')
                        .default
                }
            ></TopBanner>
            <MemberContent changePage={changePage}></MemberContent>
        </div>
    );
};

export default Member;
