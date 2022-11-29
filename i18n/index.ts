import i18n from 'i18next'
import * as en from './en/common.json'
import * as es from './es/common.json'

i18n.init({
  fallbackLng: 'es',
  supportedLngs: ['es', 'en'],
  resources: {
    en: {
      translation: en
    },
    es: {
      translation: es
    }
  },
  initImmediate: true
})

export default i18n
