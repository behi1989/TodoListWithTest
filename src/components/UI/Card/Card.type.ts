import { ReactElement } from 'react'

export type CardType = {
  hasLabel?: boolean
  label?: string
  labelClass?: string
  children: ReactElement | ReactElement[]
  className?: string
}
