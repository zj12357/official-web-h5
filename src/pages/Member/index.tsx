import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TopBanner } from '@/components/TopBanner';
import { MemberContent } from './MemberContent';

type MemberProps = {};

const Member: FC<MemberProps> = (props) => {
    const { t } = useTranslation();
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
