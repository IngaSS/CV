import { memo } from 'react'
import Header from './header/header'
import { useReactiveVar } from '@apollo/client'
import { mobileMenuOpened } from '../store/main'
// import { GET_MAIN_PAGE } from '../graphql/queries/main'
import { sections } from './config/config'
import { content } from '../content/content.json'

const Layout = memo(() => {
  const isMenuShown = useReactiveVar(mobileMenuOpened)

  return (
    <div className={`layout mobile-menu__opened-${isMenuShown}`}>
      <Header />
      <main className="main">
        {sections.map(({ component }: any, key: number) => {
          return (
            <div className={`section section-${key + 1}`} key={key}>
              {component(key, content)}
            </div>
          )
        })}
      </main>
    </div>
  )
})

Layout.displayName = 'Layout'
export default Layout
