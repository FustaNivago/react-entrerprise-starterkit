import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend, { HttpBackendOptions } from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    ns: [],
    defaultNS: undefined,
    fallbackLng: 'en',
    debug: true,
    load: 'languageOnly',
    partialBundledLanguages: false,

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: `${import.meta.env.VITE_API_BASE_URL}/traslations`,
    },
  });

export default i18n;
