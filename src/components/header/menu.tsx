import { memo } from 'react'
import { menuType } from './@types'
import { menuConfig } from './config/config'

const Menu = memo(() => {
  return (
    <menu className="navigation">
      <ul className="navigation-list">
        {menuConfig.map(({ name }: menuType, key: number) => {
          return (
            <li key={key} className="navigation-list-item">
              {name}
            </li>
          )
        })}
      </ul>
    </menu>
  )
})

Menu.displayName = 'Menu'
export default Menu
