import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectRecruitmentDetail,
    storeRecruitmenDetail,
} from '@/store/recruitment/recruitmentSlice';
import NavBar from '@/components/NavBar';

type RecruitmentdetailProps = {};

const Recruitmentdetail: FC<RecruitmentdetailProps> = (props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const detailContent = useSelector(selectRecruitmentDetail);
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        dispatch(storeRecruitmenDetail(id));
    }, []);

    return (
        <div className="w-full p-[20px] bg-[#181818]">
            <NavBar title={t('detail-title-recruitment')}></NavBar>
            <div className="w-full">
                <div className="pt-[30px] pb-[20px] border-b border-solid border-[#404040]">
                    <h2 className="text-[20px] text-[#FFD78E]">
                        {detailContent.jobName}
                    </h2>
                </div>
                <div className="w-full pt-[30px]">
                    <div className="w-full mb-[30px]">
                        <h3 className="text-[#FFD78E] text-[16px]">薪资福利</h3>
                        <ul className="mt-[10px]">
                            {detailContent.jobSalaryContent?.map(
                                (item, index) => (
                                    <li key={index}>
                                        <p className="text-[#BFA983] text-[12px]">
                                            <i className="mr-[2px]">
                                                {index + 1}.
                                            </i>
                                            {item}
                                        </p>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                    <div className="w-full mb-[30px]">
                        <h3 className="text-[#FFD78E] text-[16px]">职位描述</h3>
                        <ul className="mt-[10px]">
                            {detailContent.jobDescriptionContent?.map(
                                (item, index) => (
                                    <li key={index}>
                                        <p className="text-[#BFA983] text-[12px]">
                                            <i className="mr-[2px]">
                                                {index + 1}.
                                            </i>
                                            {item}
                                        </p>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                    <div className="w-full mb-[30px]">
                        <h3 className="text-[#FFD78E] text-[16px]">任职要求</h3>
                        <ul className="mt-[10px]">
                            {detailContent.jobRequirementsContent?.map(
                                (item, index) => (
                                    <li key={index}>
                                        <p className="text-[#BFA983] text-[12px]">
                                            <i className="mr-[2px]">
                                                {index + 1}.
                                            </i>
                                            {item}
                                        </p>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recruitmentdetail;
