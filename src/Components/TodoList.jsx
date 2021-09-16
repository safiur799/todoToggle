import React from "react";
import Todo from "./Todo";
export default function TodoList({ todos, setTodos }) {
  return (
    <div>
      <ul>
        {todos.map((el) => (
          <Todo
            text={el.text}
            key={el.id}
            setTodos={setTodos}
            todos={todos}
            todo={el}
          />
        ))}
      </ul>
    </div>
  );
}
