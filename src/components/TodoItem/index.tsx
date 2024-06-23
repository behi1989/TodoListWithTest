import { FC } from "react"

import { Button } from "../UI"

import { TodoItemType } from "./TodoItem.type"

const TodoItem:FC<TodoItemType> = ({title, remove, edit, editFlag, editCanceling, ...rest}) => {
  return (
    <div className="flex items-center justify-between" {...rest}>
        <span className="text-base font-medium text-white">{title}</span>
        <div className="flex items-center gap-1">
            <Button data-cy="removeTodoBtn" className={`text-white font-medium ${editFlag ? 'border bg-sp-metal border-slate-300' : 'bg-sp-red border-none'}`} disabled={editFlag} label="Delete" onClick={remove}/>
            {editFlag ? (
              <Button data-cy="cancelEditTodoBtn" className="bg-gray-300 text-sp-metal font-medium" label="Cancel" onClick={editCanceling} />
            ) : (
              <Button data-cy="editTodoBtn" className="bg-yellow-500 text-white font-medium" disabled={editFlag} label="Edit" onClick={edit} />
            )}
        </div>
    </div>
  )
}

export default TodoItem