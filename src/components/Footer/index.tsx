import React, { FC, HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { QRCodeCanvas } from 'qrcode.react';
import classnames from 'classnames';

interface FooterProps extends HTMLAttributes<HTMLElement> {}

const Footer: FC<FooterProps> = ({ className }: FooterProps) => {
    const { t } = useTranslation();
    return (
        <footer className={classnames('w-full bg-[#202020]', className)}>
            <div className="w-full p-[20px] bg-[#272A2F]">
                <div className="flex  justify-between items-center  py-[20px] ">
                    <img
                        src={
                            require('@/assets/images/footer/footer-cod.svg')
                                .default
                        }
                        alt=""
                        className="h-[40px]"
                    />
                    <img
                        src={
                            require('@/assets/images/footer/footer-okada.svg')
                                .default
                        }
                        alt=""
                        className="h-[40px]"
                    />
                    <img
                        src={
                            require('@/assets/images/footer/footer-hann.svg')
                                .default
                        }
                        alt=""
                        className="h-[40px]"
                    />
                    <img
                        src={
                            require('@/assets/images/footer/footer-resorts-world.svg')
                                .default
                        }
                        alt=""
                        className="h-[40px]"
                    />
                </div>
                <div className="flex  justify-center items-center  py-[20px]">
                    <img
                        src={
                            require('@/assets/images/footer/footer-pagcor.svg')
                                .default
                        }
                        alt=""
                        className="h-[40px] mx-[30px]"
                    />
                    <img
                        src={
                            require('@/assets/images/footer/footer-amlc.svg')
                                .default
                        }
                        alt=""
                        className="h-[40px]  mx-[30px]"
                    />
                </div>
            </div>
            <div className="w-full px-[20px] pb-[70px]">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col justify-start items-start pt-[30px] h-[114px]">
                        <div className="flex items-center pb-[6px] border-b  w-[167px] border-[#404040]   border-solid">
                            <img
                                src={
                                    require('@/assets/images/icon/phone-icon.svg')
                                        .default
                                }
                                alt=""
                                className="w-[12px]"
                            />
                            <span className="text-[12px] text-[#C0C0C0] ml-[10px]">
                                {t('footer-contact-phone')}
                            </span>
                        </div>

                        <p className="text-[#C0C0C0] text-[12px] mt-[10px]">
                            <span className="underline mr-[5px]">
                                +63 999 936 7777
                            </span>
                            <span>中/EN</span>
                        </p>
                        <p className="text-[#C0C0C0] text-[12px] mt-[10px]">
                            <span className="underline mr-[5px]">
                                +63 906 310 6999
                            </span>
                            <span>한국인</span>
                        </p>
                    </div>
                    <div className="flex flex-col justify-start items-start  pt-[30px] h-[114px]">
                        <div className="flex items-center pb-[6px] border-b  w-[167px] border-[#404040]   border-solid">
                            <img
                                src={
                                    require('@/assets/images/icon/email-icon.svg')
                                        .default
                                }
                                alt=""
                                className="w-[12px]"
                            />
                            <span className="text-[12px] text-[#C0C0C0] ml-[10px]">
                                {t('footer-contact-email')}
                            </span>
                        </div>

                        <p className="text-[#C0C0C0] text-[12px] mt-[10px]">
                            <span className="underline mr-[5px]">
                                HR@okbet-manila.com
                            </span>
                            <span>{t('footer-contact-personnel')}</span>
                        </p>
                        <p className="text-[#C0C0C0] text-[12px] mt-[10px]">
                            <span className="underline mr-[5px]">
                                VIP@okbet-manila.com
                            </span>
                            <span>{t('footer-contact-vip')}</span>
                        </p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col justify-start items-start pt-[30px] h-[114px]">
                        <div className="flex items-center pb-[6px] border-b  w-[167px] border-[#404040]   border-solid">
                            <img
                                src={
                                    require('@/assets/images/icon/whatsapp-icon.svg')
                                        .default
                                }
                                alt=""
                                className="w-[12px]"
                            />
                            <span className="text-[12px] text-[#C0C0C0] ml-[10px]">
                                {t('footer-contact-whatsapp')}
                            </span>
                        </div>

                        <p className="text-[#C0C0C0] text-[12px] mt-[10px]">
                            <span className="underline mr-[5px]">
                                +63 999 909 5555
                            </span>
                            <span>{t('footer-contact-accountant')}</span>
                        </p>
                        <p className="text-[#C0C0C0] text-[12px] mt-[10px]">
                            <span className="underline mr-[5px]">
                                +63 999 936 7777
                            </span>
                            <span>{t('footer-contact-market')}</span>
                        </p>
                    </div>
                    <div className="flex flex-col justify-start items-start  pt-[30px] h-[114px]">
                        <div className="flex items-center pb-[6px] border-b  w-[167px] border-[#404040]   border-solid">
                            <img
                                src={
                                    require('@/assets/images/icon/telegram-icon.svg')
                                        .default
                                }
                                alt=""
                                className="w-[12px]"
                            />
                            <span className="text-[12px] text-[#C0C0C0] ml-[10px]">
                                {t('footer-contact-telegram')}
                            </span>
                        </div>

                        <p className="text-[#C0C0C0] text-[12px] mt-[10px]">
                            <span className="underline mr-[5px]">
                                @OkbetVipClub
                            </span>
                        </p>
                    </div>
                </div>
                <div className="w-full flex flex-col  items-center mt-[30px]">
                    <QRCodeCanvas
                        value="https://reactjs.org/"
                        size={94}
                        bgColor={'#FFD78E'}
                        includeMargin={true}
                    />
                    <p className="mt-[10px] text-[#BFA983] text-[12px]">
                        {t('footer-qr-register')}
                    </p>
                </div>
                <div className="mt-[30px] text-[#C0C0C0]  text-[12px]  w-full flex justify-center">
                    {t('footer-copyright')}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
