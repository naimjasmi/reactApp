import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

//test
function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo
    }
    //add the todo list
    setList([...list, newTodo])

    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  }

  return (
    <div className="App">

      <div class="topnav">
        <a class="active" href="/">Home</a>
        <a href="/workgroup">workgroup</a>
        <a href="#contact">Contact</a>
        <a href="/about">About</a>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h1> Todo List</h1>
          <input type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => addTodo(input)}>Add</button>
          <ul>
            {
              list.map((todo) => (
                <li key={todo.id}>
                  {todo.todo}
                  <button onClick={() => deleteTodo(todo.id)}>&times;</button>
                </li>
              ))
            }
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
