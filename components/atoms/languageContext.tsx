'use client'

import { getCookie, setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { createContext, ReactNode, useContext, useState } from 'react'
import * as en from '../../i18n/en/common.json'
import * as navEn from '../../i18n/en/navegation.json'
import * as es from '../../i18n/es/common.json'
import * as navEs from '../../i18n/es/navegation.json'

const translations = {
  es: {
    ...es,
    navigation: navEs
  },
  en: {
    ...en,
    navigation: navEn
  }
}
const initialLang = 'es'

export type LangContextType = {
  text: typeof translations.en;
  lang: string;
  handleLang: (nextLang: string) => void;
};

const LanguageContext = createContext<LangContextType | null>(null)

export const LanguageProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [lang, setLang] = useState<string>(() => {
    if (getCookie('lang')) {
      return getCookie('lang').toString()
    }

    return initialLang
  })
  const [text, setText] = useState(translations[lang])
  const router = useRouter()

  const handleLang = (nextLang: string) => {
    if (lang !== nextLang) {
      setCookie('lang', nextLang)
      setLang(nextLang)
      setText(translations[nextLang])
      router.push(`/${nextLang}`)
    }
  }

  const data = {
    text,
    handleLang,
    lang
  }

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  )
}

export const useLanguageContext = () => {
  const context = useContext(LanguageContext) as LangContextType

  if (!context) {
    console.error('Error deploying Language Context!!!')
  }

  return context
}

export default LanguageContext
