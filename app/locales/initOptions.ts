import en from "./en";
import id from "./id";

export const initOptions = {
  resources: {
    en: {
      translation: en,
    },
    id: {
      translation: id,
    },
  },
  lng: 'id',
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
};

