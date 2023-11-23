import React from 'react'
import { customIcons } from './config/icons'

export interface IconProps {
  iconName: any
  className?: string
  title?: string
  id?: string
}

const Icon: React.FC<IconProps> = ({ iconName, className, title, id }) => {
  const Icon = customIcons[iconName]
  if (!Icon) return <></>
  return <Icon className={className} id={id} title={title} />
}

export default Icon
