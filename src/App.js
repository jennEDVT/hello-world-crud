import React, {useState, useEffect} from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm.js";
import TodoItem from "./components/TodoItem.js";

import './App.css';
import {API_BASE_URL} from './Constants.js';

export default function App() {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    axios.get(API_BASE_URL).then((response) => {
      setTodo(response.data);
    });
  }, []);

  const createTodoMarkup = (todoItem) => {
    return <TodoItem 
              todos={todos} 
              setTodo={setTodo} 
              key={todoItem.id} 
              task={todoItem.task} 
              id={todoItem.id}/>
  }

  let todoList = (todos.length > 0) ? todos.map(createTodoMarkup) : "";

  return (
    <div className="page">
      {todoList}
      <TodoForm todos={todos} setTodo={setTodo} />
    </div>
  );
}

