import React from 'react'
import {Todo} from './model';
import SingleTodo from './SingleTodo';
interface props {
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList:React.FC<props> = ({todos,setTodos}:props) => {
    return (
        <div>
            {todos?.map((todo:Todo,index:number)=>
                <SingleTodo index={index} todos={todos} todo={todo} key={index} setTodos={setTodos}  />
            )}
        </div>
    )
}

export default TodoList
