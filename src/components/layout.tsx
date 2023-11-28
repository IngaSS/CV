import { memo, useMemo } from 'react'
import Header from './header/header'
import { useQuery, useReactiveVar } from '@apollo/client'
import { mobileMenuOpened } from '../store/main'
import { GET_MAIN_PAGE } from '../graphql/queries/main'
import { sections } from './config/config'

const Layout = memo(() => {
  const isMenuShown = useReactiveVar(mobileMenuOpened)

  const { data } = useQuery(GET_MAIN_PAGE, {
    variables: {
      locale: 'ru',
    },
  })

  const mainPageContent = useMemo(() => data?.main?.data?.attributes?.content, [data?.main?.data?.attributes?.content])

  return (
    <div className={`layout mobile-menu__opened-${isMenuShown}`}>
      <Header />
      <main className="main">
        {sections.map(({ component }: any, key: number) => {
          return (
            <div className={`section section-${key + 1}`} key={key}>
              {component(key, mainPageContent)}
            </div>
          )
        })}
      </main>
    </div>
  )
})

Layout.displayName = 'Layout'
export default Layout
