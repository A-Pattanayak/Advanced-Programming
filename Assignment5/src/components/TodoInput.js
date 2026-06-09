import { useState } from "react";
import { TODO_PLACEHOLDER } from "../constants/appConstants";

const TodoInput = ({ onAddTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTodo = todoText.trim();
    if (!trimmedTodo) return;

    onAddTodo(trimmedTodo);
    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex gap-3">
      <input
        autoFocus
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
        placeholder={TODO_PLACEHOLDER}
        className="min-w-0 flex-1 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-[15px] text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
      />
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
