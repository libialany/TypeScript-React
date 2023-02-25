import React, { useRef, useState } from 'react'
import { Todo } from "./model";
import { AiFillCheckCircle } from 'react-icons/ai';
import { TfiTrash } from 'react-icons/tfi'
import { AiFillEdit } from 'react-icons/ai'
interface props {
  index: number;
  todos: Todo[];
  todo: Todo;
  key: number;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo: React.FC<props> = ({ index, todos, todo, setTodos }: props) => {
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const [edit, setEdit] = useState<boolean>(false)
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  const handleDone = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
  }
  return (
    <form onSubmit={e=>{
      handleEdit(e,todo.id);
    }} >
      <div className='task'>
        {edit ?
          <>
          <textarea value={editTodo} onChange={(e) => setEditTodo(e.target.value)} name="" id="">
            {todo.todo}
          </textarea>
            <button>Save</button>
          </>
          :
          todo.isDone ? <s>{todo.todo}</s> :
            <span>{todo.todo}</span>
        }
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit)
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <TfiTrash />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <AiFillCheckCircle />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
