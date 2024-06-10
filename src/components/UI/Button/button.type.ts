import { ReactElement } from 'react'

export type ButtonType = {
  label?: string
  type?: 'button' | 'submit' | 'reset'
  isLoading?: boolean
  disabled?: boolean
  hasIcon?: boolean
  icon?: ReactElement
  spinnerType?: 'dot' | 'circle'
  spinnerColor?: string
  onClick?: () => void
  className?: string
}
