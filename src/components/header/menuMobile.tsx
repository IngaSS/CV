import { memo } from 'react'
import Icon from '../common/icon/icon'
import { menuType } from './@types'
import { menuConfig } from './config/config'
import { useReactiveVar } from '@apollo/client'
import { mobileMenuOpened, setMobileMenuOpened } from '../../store/main'

const MenuMobile = memo(() => {
  const isMenuShown = useReactiveVar(mobileMenuOpened)
  return (
    <div className="menu-mobile">
      <button onClick={() => setMobileMenuOpened(!isMenuShown)} className="menu-mobile-btn">
        {isMenuShown ? (
          <Icon iconName="cross" className="menu-mobile-icon" />
        ) : (
          <Icon iconName="menu" className="menu-mobile-icon" />
        )}
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
