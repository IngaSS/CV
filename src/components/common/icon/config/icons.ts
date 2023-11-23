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
}
