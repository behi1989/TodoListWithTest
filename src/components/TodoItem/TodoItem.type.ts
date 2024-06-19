import { HTMLAttributes } from 'react'

export type TodoItemType = {
  title: string
  remove: (id?: number) => void
  edit: (id?: number) => void
  editFlag?: boolean
  editCanceling?: () => void
  [rest: string]: any
} & HTMLAttributes<HTMLDivElement>
