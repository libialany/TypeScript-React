import React from 'react'
import {Todo} from './model';
import SingleTodo from './SingleTodo';
interface props {
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList:React.FC<props> = ({todos,setTodos}:props) => {
    return (
        <div className='todos'>
            {
                todos.length>0?todos?.map((todo:Todo,index:number)=>
                <SingleTodo index={index} todos={todos} todo={todo} key={index} setTodos={setTodos}  />
            ):
            <p className='task'>No taks yet</p>
            }
        </div>
    )
}

export default TodoList
