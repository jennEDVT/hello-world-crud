import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import axios from "axios";
import './App.css';

const baseApiUrl = "https://63e3eecac919fe386c12534f.mockapi.io/fakeData";

export default function App() {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    axios.get(baseApiUrl).then((response) => {
      setTodo(response.data);
    });
  }, []);

  function createTodo() {
    axios
      .post(baseApiUrl, {
        task: "write a note",
        done: false
      })
      .then((response) => {
        setTodo(response.data);
      });
  }

  // if (todos.length < 1) return <div>No Data</div>;

  console.log('todos', todos);

  return (
    <div>
      <button onClick={createTodo}>Create Todo</button>
    </div>
  );
}

