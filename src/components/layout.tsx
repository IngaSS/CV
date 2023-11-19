import { memo } from 'react'
import Header from './header/header'

const Layout = memo(() => {
  return (
    <div className="layout">
      <Header />
      <main className="main"></main>
    </div>
  )
})

Layout.displayName = 'Layout'
export default Layout
