import { useState, useEffect, type FormEvent, type ChangeEvent } from "react";
import type { Todo } from "../types/TodoTypes";
import api from "../api";

const TodoApp = () => {
  const [todo, setTodo] = useState<Todo>({
    todoTitle: "",
    todoTask: "",
  });

  const [getTodos, setGetTodos] = useState<Todo[]>([]);
  const [openModel, setOpenModel] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState<string | null>(null);
  const [updateTodo, setUpdateTodo] = useState({
    todoTitle: "",
    todoTask: "",
  });

  const fetchTodos = async () => {
    try {
      const res = await api.get("/");
      setGetTodos(res.data.todos);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateTodo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateTdo = async (e: FormEvent) => {
    e.preventDefault();
    await api.post("/createTodo", todo);
    alert("Todo Created successfully");
    setTodo({ todoTitle: "", todoTask: "" });
    fetchTodos();
  };

  // const handleOpenModel = () => setOpenModel(true);
  const handleCancel = () => {
    setOpenModel(false);
    setSelectedTodoId(null);
    setUpdateTodo({ todoTitle: "", todoTask: "" });
  };

  const handleUpdateClick = (todo: Todo) => {
    setSelectedTodoId(todo._id || null);
    setUpdateTodo({
      todoTitle: todo.todoTitle,
      todoTask: todo.todoTask,
    });
    setOpenModel(true);
  };

  const handleSubmitUpdate = async () => {
    if (!selectedTodoId) return;
    try {
      await api.put(`/updateTodo/${selectedTodoId}`, updateTodo);
      alert("Todo updated successfully");
      fetchTodos();
      handleCancel();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await api.delete(`deleteTodo/${id}`);
      alert("Todo Delete successfully");
      fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h3>Welcome to your Work of the Day...</h3>

      {/* Create Todo */}
      <form onSubmit={handleCreateTdo}>
        <input
          type="text"
          name="todoTitle"
          value={todo.todoTitle}
          placeholder="Enter your todo Title"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="todoTask"
          value={todo.todoTask}
          placeholder="Enter your todos task"
          onChange={handleInputChange}
        />
        <button type="submit">Add Todo</button>
      </form>

      {/* List Todos */}
      <div>
        {getTodos.map((allTodo) => (
          <div key={allTodo._id}>
            <p>Todo Title -: {allTodo.todoTitle}</p>
            <p>Todo Task -: {allTodo.todoTask}</p>
            <button onClick={() => handleUpdateClick(allTodo)}>
              Update Todo
            </button>
            <button onClick={() => handleDeleteTodo(`${allTodo._id}`)}>
              Delete Todo
            </button>
          </div>
        ))}
      </div>

      {/* Update Modal */}
      {openModel && (
        <div className="todo-from-container">
          <p className="todo-para">Update Todo</p>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmitUpdate();
            }}
          >
            <input
              type="text"
              name="todoTitle"
              value={updateTodo.todoTitle}
              placeholder="Enter your todo title"
              onChange={handleUpdateInputChange}
            />
            <input
              type="text"
              name="todoTask"
              value={updateTodo.todoTask}
              placeholder="Enter your todo task"
              onChange={handleUpdateInputChange}
            />
            <div className="btn-container">
              <button
                className="update"
                type="button"
                onClick={handleSubmitUpdate}
              >
                Update
              </button>
              <button className="cancel" type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TodoApp;
