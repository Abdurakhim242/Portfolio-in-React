import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./locales/en/translation.json";
import translationUz from "./locales/uz/translation.json";
import translationRu from "./locales/ru/translation.json";

const resources = {
  en: { translation: translationEn },
  uz: { translation: translationUz },
  ru: { translation: translationRu },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
