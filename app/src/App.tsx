import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './components/model';
function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [todo, setTodo] = useState<string>("")
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo("")
    }
  }
  return (
    <div className="App">
      <span className='heading'>
        Tasking
      </span>
      <div>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
