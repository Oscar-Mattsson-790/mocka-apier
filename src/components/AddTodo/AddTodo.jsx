import "./AddTodo.css";
import { useState } from "react";

function AddTodo() {
  const [todo, setTodo] = useState("");

  async function postTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title: todo,
      }),
    });
    const data = await response.json();
  }

  return (
    <section className="add-todo">
      <input
        type="text"
        placeholder="Ange todo"
        className="add-todo__input"
        onChange={(event) => {
          setTodo(event.target.value);
        }}
        value={todo}
      />
      <p role="todo-text">{todo}</p>
      <button className="add-todo__button" onClick={postTodo}>
        Lägg till
      </button>
    </section>
  );
}

export default AddTodo;
