import "./AddTodo.css";
import { useState } from "react";

function AddTodo(props) {
  const { newTodo } = props;
  const [todo, setTodo] = useState("");
  console.log("Laddas om!");

  return (
    <section className="add-todo">
      <input
        type="text"
        placeholder="Ange todo"
        className="add-todo__input"
        onChange={(event) => {
          setTodo(event.target.value);
        }}
      />
      <p role="todo-text">{todo}</p>
      <button
        className="add-todo__button"
        onClick={() => {
          newTodo(todo);
        }}
      >
        Lägg till
      </button>
    </section>
  );
}

export default AddTodo;
