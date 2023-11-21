import "./App.css";
import { useState, useEffect } from "react";

import TodoItem from "./components/TodoItem/TodoItem";
import AddTodo from "./components/AddTodo/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();

      setTodos(data);
    }

    getTodos();
  }, []);

  function newTodo(todo) {
    const newTodo = {
      id: todos.length,
      title: todo,
      completed: false,
    };

    setTodos((currentTodos) => {
      return [...currentTodos, newTodo];
    });
  }

  const todosComponents = todos.map((todo) => {
    return <TodoItem task={todo.title} done={todo.completed} key={todo.id} />;
  });

  return (
    <div className="App">
      <ul className="todos" role="todos">
        {todosComponents.length > 0 ? todosComponents : <h2>Inga todos</h2>}
      </ul>
      <AddTodo newTodo={newTodo} />
    </div>
  );
}

export default App;
