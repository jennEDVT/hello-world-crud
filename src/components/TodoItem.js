import { useEffect, useState } from "react";
import axios from "axios";
import {API_BASE_URL} from '../Constants.js';

export default function TodoItem({task, id, setTodo, todos}) {
    const removeTaskFromState = (id) => {
        todos.forEach(function(item, index) {
            if (item.id == id) {
                const updatedTodos = [...todos]; // create a copy of the state array because splice() alters the original
                updatedTodos.splice(todos.indexOf(item), 1)
                setTodo(updatedTodos);
                console.log('todos in TodoItem.js', todos);
            }
        })
    }

    const deleteItem = (event, id) => {
        event.preventDefault();
        axios
            .delete(API_BASE_URL + "/" + id)
            .then((response) => {
                removeTaskFromState(id);
            });
    }

    return (
        <div className="todo__todoItem">
            <div className="todoItem__task">{task}</div>
            <button onClick={function(event) { deleteItem(event, id) }} className="todoItem__deleteButton">delete</button>
        </div>
    )
}