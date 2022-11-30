'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { LogoNavbar } from '@components/atoms/logoNavbar'
import { Button } from '@components/atoms/button'
import { ILink, NavLink } from '@components/molecules/navLink'
import { Sun } from '@components/icons/sun'
import { setInitialColorMode } from '@services/common/darkMode'
import { Moon } from '@components/icons/moon'
import { useRouter } from 'next/navigation'
import i18n from '@i18next'
import { setCookie, getCookie } from 'cookies-next'

export const NavBar = () => {
  const [darkTheme, setDarkTheme] = useState('')
  const router = useRouter()

  const linksArray: Array<ILink> = [
    {
      text: 'Precios',
      url: `/${getCookie('lang')}/pricing`
    }
  ]

  useEffect(() => {
    if (darkTheme === '') {
      setDarkTheme(setInitialColorMode())
    }

    if (darkTheme === 'dark') {
      document.documentElement.setAttribute('class', 'dark')
      localStorage.setItem('theme', 'dark')
    }

    if (darkTheme === 'light') {
      document.documentElement.setAttribute('class', 'light')
      localStorage.setItem('theme', 'light')
    }
  }, [darkTheme])

  return (
    <div className='mx-auto flex flex-wrap py-2.5 px-8 flex-col md:flex-row items-center font-medium'>
      <Link href={`/${i18n.language}`} passHref>
        <LogoNavbar />
      </Link>
      <NavLink linksArray={linksArray} />
      <Button
        onClick={() => setDarkTheme(darkTheme === 'light' ? 'dark' : 'light')}
        color='transparent'
        isRounded
        size='normal'
      >
        {darkTheme === 'light' || darkTheme === ''
          ? (
            <Sun className='hover:text-gray-600' />
            )
          : (
            <Moon className='hover:text-gray-400' />
            )}
      </Button>
      <Button
        color='primary'
        isRounded
        onClick={() => console.log('redirect')}
        size='normal'
      >
        Sistema
      </Button>
      <Button
        color='transparent'
        isRounded
        size='normal'
        onClick={() => {
          setCookie('lang', 'es')
          router.push('/es')
        }}
      >
        ES
      </Button>
      |
      <Button
        color='transparent'
        isRounded
        size='normal'
        onClick={() => {
          setCookie('lang', 'en')
          router.push('/en')
        }}
      >
        EN
      </Button>
    </div>
  )
}
