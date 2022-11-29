import * as React from 'react'
import { NavBar } from './organisms/navbar'

export interface IAppContainer {
  children?: React.ReactNode;
}

export const AppContainer: React.FC<IAppContainer> = ({ children }) => {
  return (
    <div
      className='bg-light dark:bg-dark body-font font-balooChettan text-primary dark:text-light'
      style={{ height: '100vh' }}
    >
      <header>
        <NavBar />
      </header>

      <main>{children}</main>
    </div>
  )
}
