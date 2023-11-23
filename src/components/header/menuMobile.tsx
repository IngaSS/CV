import { memo, useState } from 'react'
import Icon from '../common/icon/icon'
import { menuType } from './@types'
import { menuConfig } from './config/config'

const MenuMobile = memo(() => {
  const [isMenuShown, setMenuShown] = useState(false)
  return (
    <div className="menu-mobile">
      <button onClick={() => setMenuShown(!isMenuShown)}>
        {isMenuShown ? <Icon iconName="tick" /> : <Icon iconName="linkedIn" />}
      </button>
      <menu className={`navigation-mobile navigation-mobile__active-${isMenuShown}`}>
        <ul className="navigation-mobile-list">
          {menuConfig.map(({ name }: menuType, key: number) => {
            return (
              <li key={key} className="navigation-mobile-list-item">
                {name}
              </li>
            )
          })}
        </ul>
      </menu>
    </div>
  )
})

MenuMobile.displayName = 'MenuMobile'
export default MenuMobile
