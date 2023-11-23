import { memo } from 'react'
import Header from './header/header'
import AboutMe from './blocks/aboutMe'
import Experience from './blocks/experience'

const Layout = memo(() => {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <div className="section">
          <AboutMe />
        </div>
        <div className="section">
          <Experience />
        </div>
      </main>
    </div>
  )
})

Layout.displayName = 'Layout'
export default Layout
