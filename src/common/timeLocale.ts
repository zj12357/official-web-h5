import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en';
import 'dayjs/locale/ko';
import localeData from 'dayjs/plugin/localeData';
dayjs.extend(localeData);

const local: {
    [key: string]: string;
} = {
    cn: 'zh-cn',
    en: 'en',
    ko: 'ko',
};

dayjs.locale(local[localStorage.getItem('i18nextLng') ?? 'cn']);

export const changeTimeLocale = (lang: string) => {
    dayjs.locale(lang);
};
