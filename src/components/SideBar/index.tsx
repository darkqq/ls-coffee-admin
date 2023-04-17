import React, { FC } from 'react'
import IconDashboard from '../../Icons/IconDashboard'
import MenuItem from '../MenuItem/MenuItem'
import IconsAdministratin from '../../Icons/IconsAdministratin'

const sideBarLinks = [
  {
    title:'Dashboard',
    icon: <IconDashboard />,
  },
  {
    title: 'Analitic',
    icon: <IconsAdministratin/>,
  },
  {
    title: 'Info',
    icon: <IconsAdministratin/>,
  },
  {
    title: 'Settings',
    icon: <IconsAdministratin/>,
  }
]

const SideBar = () => {
  return (
    <aside className='side-bar'>
      {
        sideBarLinks.map(({title, icon}) => (<MenuItem key={title} icon={icon} title={title}/>))
      }
    </aside>
  )
}

export default SideBar