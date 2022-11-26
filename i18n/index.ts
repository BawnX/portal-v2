import i18n from 'i18next'
import BackendFs from 'i18next-fs-backend'

i18n.use(BackendFs).init({
  fallbackLng: 'es',
  supportedLngs: ['es', 'en'],
  fallbackNS: 'common',
  ns: ['common'],
  backend: {
    loadPath: './i18n/{{lng}}/{{ns}}.json'
  },
  initImmediate: true
})

export default i18n
