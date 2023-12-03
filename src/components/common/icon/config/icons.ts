/// <reference types="vite-plugin-svgr/client" />
import LinkedIn from '../../../../assets/icons/linkedin.svg?react'
import Tick from '../../../../assets/icons/tick.svg?react'
import Cross from '../../../../assets/icons/cross.svg?react'
import Menu from '../../../../assets/icons/menu.svg?react'
import Phone from '../../../../assets/icons/phone.svg?react'
import Post from '../../../../assets/icons/post.svg?react'
import Sport from '../../../../assets/icons/sport.svg?react'
import Books from '../../../../assets/icons/books.svg?react'
import Paint from '../../../../assets/icons/paint.svg?react'
import Movie from '../../../../assets/icons/movie.svg?react'
import Telegram from '../../../../assets/icons/telegram.svg?react'
import Whatsapp from '../../../../assets/icons/whatsapp.svg?react'
import JS from '../../../../assets/icons/js.svg?react'
import TS from '../../../../assets/icons/ts.svg?react'
import React from '../../../../assets/icons/react.svg?react'
import HTML from '../../../../assets/icons/html.svg?react'
import CSS from '../../../../assets/icons/css.svg?react'
import PostCss from '../../../../assets/icons/postcss.svg?react'
import Redux from '../../../../assets/icons/redux.svg?react'
import Tailwind from '../../../../assets/icons/tailwind.svg?react'
import Node from '../../../../assets/icons/node.svg?react'
import Gatsby from '../../../../assets/icons/gatsby.svg?react'
import Vite from '../../../../assets/icons/vite.svg?react'
import Webpack from '../../../../assets/icons/webpack.svg?react'
import Rollup from '../../../../assets/icons/rollup.svg?react'
import StyledComponents from '../../../../assets/icons/styled-components.svg?react'
import Graphql from '../../../../assets/icons/graphql.svg?react'
import Apollo from '../../../../assets/icons/apollographql.svg?react'
import Figma from '../../../../assets/icons/figma.svg?react'
import Jira from '../../../../assets/icons/jira.svg?react'
import Strapi from '../../../../assets/icons/strapi.svg?react'
import Git from '../../../../assets/icons/git.svg?react'
import Friends from '../../../../assets/icons/friends.svg?react'
import Study from '../../../../assets/icons/study.svg?react'

export const customIcons: {
  [key: string]: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
      className?: string | undefined
    }
  >
} = {
  linkedIn: LinkedIn,
  tick: Tick,
  cross: Cross,
  menu: Menu,
  phone: Phone,
  post: Post,
  sport: Sport,
  books: Books,
  paint: Paint,
  movie: Movie,
  telegram: Telegram,
  whatsapp: Whatsapp,
  js: JS,
  ts: TS,
  react: React,
  html: HTML,
  css: CSS,
  postCss: PostCss,
  redux: Redux,
  tailwind: Tailwind,
  node: Node,
  gatsby: Gatsby,
  strapi: Strapi,
  vite: Vite,
  webpack: Webpack,
  rollup: Rollup,
  styledComponents: StyledComponents,
  graphql: Graphql,
  apollo: Apollo,
  figma: Figma,
  jira: Jira,
  git: Git,
  friends: Friends,
  study: Study,
}
