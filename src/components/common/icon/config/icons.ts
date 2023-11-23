/// <reference types="vite-plugin-svgr/client" />
import LinkedIn from '../../../../assets/icons/linkedin.svg?react'

export const customIcons: {
  [key: string]: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
      className?: string | undefined
    }
  >
} = {
  linkedIn: LinkedIn,
}
