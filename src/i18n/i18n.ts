import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import PtTranslate from './locales/pt.json';
import EnTranslate from './locales/en.json';

const resources = {
  pt: {
    translation: PtTranslate,
  },
  en: {
    translation: EnTranslate,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt', // default language
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

export default i18n;
