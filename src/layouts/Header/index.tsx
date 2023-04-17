import React , { FC } from 'react'

type HeaderProps = {
  children: React.ReactNode
}

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className='header'>
      <div className="wrapper">
        <div className="header__body">
          {children}
        </div>
      </div>
    </header>
  )
}

export default Header
