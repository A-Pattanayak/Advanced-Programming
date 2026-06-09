import { EMPTY_TODO_MESSAGE, TODO_STATUS } from "../constants/appConstants";

const TodoList = ({ todos, onToggleDone, onDeleteTodo }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-8 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Description
            </th>
            <th className="px-8 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Status
            </th>
            <th className="px-8 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.length === 0 ? (
            <tr>
              <td
                colSpan="3"
                className="px-5 py-14 text-center text-sm italic text-slate-500"
              >
                {EMPTY_TODO_MESSAGE}
              </td>
            </tr>
          ) : (
            todos.map((todo) => (
              <tr
                key={todo.id}
                className="border-b border-slate-200 transition hover:bg-slate-50"
              >
                <td
                  className={`px-8 py-5 text-[15px] ${
                    todo.completed
                      ? "text-slate-500 line-through"
                      : "text-slate-900"
                  }`}
                >
                  {todo.text}
                </td>
                <td className="px-8 py-5">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      todo.completed
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {todo.completed
                      ? TODO_STATUS.completed
                      : TODO_STATUS.pending}
                  </span>
                </td>
                <td className="px-8 py-5 text-right">
                  <button
                    type="button"
                    onClick={() => onToggleDone(todo.id)}
                    className="mr-2 rounded-md bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-100"
                  >
                    {todo.completed ? "Undo" : "Done"}
                  </button>
                  <button
                    type="button"
                    onClick={() => onDeleteTodo(todo.id)}
                    className="rounded-md bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
