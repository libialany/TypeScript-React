import React, { Component } from 'react'
import {Todo} from "./model";
interface props {
  index: number;
  todos:Todo[];
  todo:Todo;
  key:number;
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo:React.FC<props> = ({index,todos,todo,setTodos}:props) => {
    return (
      <div>
        <div>
          
        </div>
      </div>
    )
}

export default SingleTodo
