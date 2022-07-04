import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import cn from '@/assets/localization/cn.json';
import en from '@/assets/localization/en.json';
import ko from '@/assets/localization/ko.json';

const resources = {
    cn: {
        translation: {
            ...cn,
        },
    },
    en: {
        translation: {
            ...en,
        },
    },
    ko: {
        translation: {
            ...ko,
        },
    },
};

const detectorOptions = {
    // order and from where user language should be detected
    order: [
        'querystring',
        'cookie',
        'localStorage',
        'sessionStorage',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
    ],

    // keys or params to lookup language from
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupSessionStorage: 'i18nextLng',
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    // cache user language on
    caches: ['localStorage', 'sessionStorage'],
    excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
};

i18n.use(detector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: 'en', // use en if detected lng is not available
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
