import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import cn from '@/assets/localization/cn.json';
import en from '@/assets/localization/en.json';
import ko from '@/assets/localization/ko.json';

const resources = {
    en: {
        translation: {
            ...en,
        },
    },
    cn: {
        translation: {
            ...cn,
        },
    },
    ko: {
        translation: {
            ...ko,
        },
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'cn',
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
