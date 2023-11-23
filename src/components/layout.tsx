import { memo } from 'react'
import Header from './header/header'
import AboutMe from './blocks/aboutMe'
import Experience from './blocks/experience'
import Skills from './blocks/skills'
import Education from './blocks/education'
import Interests from './blocks/interests'
import Contacts from './blocks/contacts'

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
        <div className="section">
          <Skills />
        </div>
        <div className="section">
          <Education />
        </div>
        <div className="section">
          <Interests />
        </div>
        <div className="section">
          <Contacts />
        </div>
      </main>
    </div>
  )
})

Layout.displayName = 'Layout'
export default Layout
