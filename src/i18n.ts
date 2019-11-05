import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import fr from './constants/lang/fr.json'
import en from './constants/lang/en.json'

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        react: {
            transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'em'],
        },
        resources: {
            en,
            fr,
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n
