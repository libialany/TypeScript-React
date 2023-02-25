import React, { useReducer, useState } from 'react';
import './App.css';
import './style/styles.css';
function App() {

  const reducer = (state, action) => {
    if (action.type === "ADD") {
      const { name } = action.payload;
      return [...state, {
        id: Date.now(),
        name,
        isCompleted: false
      }]
    }
    else if (action.type === "COMPLETED") {
      const { id } = action.payload;
      const newState = state.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted
          }
        }
        return todo;
      });
      return newState;
    }
  }
  const [todo, setTodo] = useState("");
  const reducer = useReducer(reducer, initialState);

  return (
    <div>
      <form onSubmit={(e) => { handleAdd(e) }}>
        <input type='text' placeholder='Enter a Task' value={todo} ref={inputRef} onChange={(e) => { setTodo(e.target.value) }}>
        </input>
        <button type='submit'>GO</button>
      </form>

    </div>
  );
}

export default App;
