import { useState } from "react";
import axios from "axios";
import {API_BASE_URL} from '../Constants.js';

export default function TodoItem({task, id, setTodo, todos}) {
    const removeTaskFromState = (id) => {
        todos.forEach(function(item, index) {
            if (item.id == id) {
                console.log("in findTask()", item, todos.indexOf(item));
                todos.splice(todos.indexOf(item), 1)
                setTodo(todos);
            }
        })
    }
    
    const deleteItem = (id) => {
        console.log('click', id);
        axios
            .delete(API_BASE_URL + "/" + id)
            .then((response) => {
                removeTaskFromState(id);
            });
    }

    return (
        <div className="todo__todoItem">
            <div className="todoItem__task">{task}</div>
            <button onClick={function() { deleteItem(id) }} className="todoItem__deleteButton">delete</button>
        </div>
    )
}