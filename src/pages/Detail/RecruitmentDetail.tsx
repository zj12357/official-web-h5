import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import NavBar from '@/components/NavBar';

type RecruitmentdetailProps = {};

const Recruitmentdetail: FC<RecruitmentdetailProps> = (props) => {
    const { t } = useTranslation();
    return (
        <div className="w-full p-[20px] bg-[#181818]">
            <NavBar title={t('detail-title-recruitment')}></NavBar>
            <div className="w-full">
                <div className="pt-[30px] pb-[20px] border-b border-solid border-[#404040]">
                    <h2 className="text-[20px] text-[#FFD78E]">场面高级专员</h2>
                </div>
                <div className="w-full pt-[30px]">
                    <div className="w-full mb-[30px]">
                        <h3 className="text-[#FFD78E] text-[16px]">薪资福利</h3>
                        <ul className="mt-[10px]">
                            <li>
                                <p className="text-[#BFA983] text-[12px]">
                                    1. 薪资范围 ₱133,000
                                </p>
                            </li>
                            <li>
                                <p className="text-[#BFA983] text-[12px]">
                                    2. 八小时工作制
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full mb-[30px]">
                        <h3 className="text-[#FFD78E] text-[16px]">职位描述</h3>
                        <ul className="mt-[10px]">
                            <li>
                                <p className="text-[#BFA983] text-[12px]">
                                    1. 负责招待贵宾会贵宾
                                </p>
                            </li>
                            <li>
                                <p className="text-[#BFA983] text-[12px]">
                                    2. 提供客人最优质之客户服
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full mb-[30px]">
                        <h3 className="text-[#FFD78E] text-[16px]">任职要求</h3>
                        <ul className="mt-[10px]">
                            <li>
                                <p className="text-[#BFA983] text-[12px]">
                                    1. 高中程度，普通话良好，有一定的英语基础
                                </p>
                            </li>
                            <li>
                                <p className="text-[#BFA983] text-[12px]">
                                    2.
                                    具备公关或娱乐场1年以上相关经验，具备一定服务礼仪，服从安排
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recruitmentdetail;
