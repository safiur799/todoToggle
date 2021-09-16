import React from "react";
import "./Todo.css";

export default function Todo({ todo, todos, text, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completedHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div>
      <li className={`${todo.completed ? "completed" : ""}`}>
        {text}
        <button onClick={completedHandler}>done</button>
        <button onClick={deleteHandler}>delete</button>
      </li>
    </div>
  );
}
