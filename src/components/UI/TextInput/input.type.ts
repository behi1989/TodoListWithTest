import { InputHTMLAttributes } from 'react'

export type TextInputType = {
  id: string
  hasLabel: boolean
  label?: string
  labelClass?: string
  className?: string
  [rest: string]: any
} & InputHTMLAttributes<HTMLInputElement>
