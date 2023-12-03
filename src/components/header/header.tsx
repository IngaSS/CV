import { memo } from 'react'
import Menu from './menu'

const Header = memo(() => {
  return (
    <header className="header">
      <Menu />
    </header>
  )
})

Header.displayName = 'Header'
export default Header
