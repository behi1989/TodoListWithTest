import { FC } from "react"

import { Button } from "../UI"

import { TodoItemType } from "./TodoItem.type"

const TodoItem:FC<TodoItemType> = ({title, remove, edit, editFlag, editCanceling}) => {
  return (
    <div className="flex items-center justify-between">
        <span className="text-base font-medium text-white">{title}</span>
        <div className="flex items-center gap-1">
            <Button className="bg-sp-red text-white font-medium" label="Delete" onClick={remove}/>
            {editFlag ? (
              <Button className="bg-gray-300 text-sp-metal font-medium" label="Cancel" onClick={editCanceling} />
            ) : (
              <Button className="bg-yellow-500 text-white font-medium" disabled={editFlag} label="Edit" onClick={edit} />
            )}
        </div>
    </div>
  )
}

export default TodoItem