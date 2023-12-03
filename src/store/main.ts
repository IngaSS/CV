import { makeVar } from '@apollo/client'

export const mobileMenuOpened = makeVar(false)
export const setMobileMenuOpened = (value: boolean) => mobileMenuOpened(value)
