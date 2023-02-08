import { useState } from "react";
import axios from "axios";
import {API_BASE_URL} from '../Constants.js';

export default function TodoForm({todos, setTodo}) {
    const [userInput, setUserInput] = useState("");

    function createTodo(task) {
        axios
            .post(API_BASE_URL, {
                task: task,
                done: false
            }) 
            .then((response) => {
                setTodo(todos.concat(response.data)); 
            });
    }

    const handleChange = (event) => {
        setUserInput(event.currentTarget.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createTodo(userInput);
        setUserInput("");
    }

    return (
      <div>
        <form>
          <div>
            <h3>Add ToDo</h3>
          </div>
          <div>
            <input
              type="text"
              name="task"
              value={userInput}
              onChange={handleChange}
              placeholder="task"
            />
          </div>
          <div>
            <button onClick={handleSubmit}>Add ToDo</button>
          </div>
        </form>
      </div>
    );
  }