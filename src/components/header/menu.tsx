import { memo } from 'react'
import { menuType } from './@types'
import { menuConfig } from './config/config'
import MenuMobile from './menuMobile'

const Menu = memo(() => {
  return (
    <menu className="navigation">
      <MenuMobile />
      <ul className="navigation-list">
        {menuConfig.map(({ name, link }: menuType, key: number) => {
          return (
            <li key={key} className="navigation-list-item">
              <a href={link}>{name}</a>
            </li>
          )
        })}
      </ul>
    </menu>
  )
})

Menu.displayName = 'Menu'
export default Menu
