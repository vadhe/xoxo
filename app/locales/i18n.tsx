import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { initOptions } from './initOptions';

i18n.use(initReactI18next).init(initOptions);

export default i18n;
