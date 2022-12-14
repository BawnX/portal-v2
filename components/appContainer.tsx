import * as React from 'react'
import { NavBar } from './organisms/navbar'

export interface IAppContainer {
  children?: React.ReactNode;
}

export const AppContainer: React.FC<IAppContainer> = ({ children }) => {
  return (
    <div
      
    >
      

      <main>{children}</main>
    </div>
  )
}
