import React from "react";

export default function Forms({ todos, setTodos, setInputText, inputText }) {
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = () => {
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={inputHandler}
          name="todo"
          placeholder="add todo"
        />
        <button onClick={submitTodoHandler}>add</button>
      </div>
    </div>
  );
}
