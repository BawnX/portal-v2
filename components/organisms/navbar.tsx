'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { LogoNavbar } from '@components/atoms/logoNavbar'
import { Button } from '@components/atoms/button'
import { ILink, NavLink } from '@components/molecules/navLink'
import { Sun } from '@components/icons/sun'
import { setInitialColorMode } from '@services/common/darkMode'
import { Moon } from '@components/icons/moon'

const linksArray: Array<ILink> = [
  {
    text: 'Precios',
    url: '/pricing'
  }
]

export const NavBar = () => {
  const [darkTheme, setDarkTheme] = useState('')

  useEffect(() => {
    if (darkTheme === '') { setDarkTheme(setInitialColorMode()) }

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
      <Link href='/' passHref>
        <LogoNavbar />
      </Link>
      <NavLink linksArray={linksArray} />
      <Button onClick={() => setDarkTheme(darkTheme === 'light' ? 'dark' : 'light')} color='transparent' isRounded size='normal'>
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
        onClick={() => console.log('change to spanish')}
      >
        ES
      </Button>
      |
      <Button
        color='transparent'
        isRounded
        size='normal'
        onClick={() => console.log('change to english')}
      >
        EN
      </Button>
    </div>
  )
}
