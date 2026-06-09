import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { APP_SUBTITLE, APP_TITLE } from "./constants/appConstants";
import "./index.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    document.title = `${APP_TITLE} (${todos.length})`;
  }, [todos.length]);

  const addTodo = (todoText) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: todoText,
      completed: false,
    };

    setTodos((currentTodos) => [...currentTodos, newTodo]);
  };

  const toggleTodoDone = (todoId) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (todoId) => {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== todoId)
    );
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-20 text-slate-900">
      <section className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/70">
        <div className="border-b border-slate-200 px-8 py-8">
          <h1 className="text-2xl font-bold">{APP_TITLE}</h1>
          <p className="mt-2 text-sm text-slate-500">{APP_SUBTITLE}</p>
          <TodoInput onAddTodo={addTodo} />
        </div>

        <TodoList
          todos={todos}
          onToggleDone={toggleTodoDone}
          onDeleteTodo={deleteTodo}
        />
      </section>
    </main>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
