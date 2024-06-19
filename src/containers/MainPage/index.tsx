import { FC, FormEvent, useState } from "react"

import { TodoItem } from "@/components"
import { Button, Card, TextInput } from "@/components/UI"

import { TodoType } from "@/types"

const MainPage:FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<TodoType[]>([])
  const [currentTodo, setCurrentTodo] = useState<Partial<TodoType>>({})
  const [editFlag, setEditFlag] = useState<boolean>(false)

  const addTodoHandler = (e: FormEvent) => {
    e.preventDefault()
    const id = Date.now()
    setTodos([...todos, {id, title: todo}])
    setTodo("")
  }

  const editHandler = (id: number) => {
    setEditFlag(true)
    const todo = todos.find(todo => todo.id === id)!
    setCurrentTodo(todo)
    setTodo(todo?.title)
  }

  const updateTodoHandler = (e:FormEvent) => {
    e.preventDefault()
    const updatedTodo = {id: currentTodo?.id!, title: todo}
    const updatedItem = todos.map((todo) => {
      return todo.id === currentTodo?.id ? updatedTodo : todo;
    });
    setTodos(updatedItem)
    setTodo("")
    setEditFlag(false)
  }

  const editCancelingHandler = () => {
    setTodo("")
    setEditFlag(false)
    setCurrentTodo({})
  }

  const deleteHandler = (id: number) => {
    const filteredTodo = todos.filter(todo => todo.id !== id)
    setTodos(filteredTodo)
  }

  return (
    <section className="w-full max-w-[300px] md:max-w-[600px] inset-0 m-auto">
      <h2 data-cy="pageTitle" className="text-white text-center mt-3">Mini TodoList App</h2>
      <Card data-cy="addToDoBox" className="mt-8" hasLabel label="Add New Todo">
        <form onSubmit={editFlag ? updateTodoHandler : addTodoHandler} className="flex justify-between items-center gap-2">
          <TextInput id="todoInput" data-cy="formTextInput" value={todo} onChange={(text) => setTodo(text?.target?.value)} hasLabel={false} />
          {editFlag ? 
            <Button data-cy="todoUpdateButton" type="submit" label="Update" className="bg-yellow-500 text-white font-medium" />
          : 
            <Button data-cy="todoAddButton" type="submit" label="Add" className="bg-sp-blue text-white" />
          }
        </form>
      </Card>
      <Card data-cy="todoListBox" className="mt-3" hasLabel label={`Todos(${todos.length})`}>
        {todos.length ? 
          todos?.map(todo => 
            <TodoItem 
              key={todo.id} 
              data-cy="todoItemComponent"
              title={todo.title} 
              edit={todo.id !== currentTodo.id && editFlag  ? () => {} : ()=> editHandler(todo.id)}
              editFlag={todo.id === currentTodo.id ? editFlag : false}
              editCanceling={editCancelingHandler}
              remove={todo.id !== currentTodo.id && editFlag  ? () => {} : ()=> deleteHandler(todo.id)}
            />
          ) 
        : 
          <h4 data-cy="nothingHereAlert" className="text-base text-center font-semibold text-sp-red">Nothing here!</h4>}
      </Card>
    </section>
  )
}

export default MainPage