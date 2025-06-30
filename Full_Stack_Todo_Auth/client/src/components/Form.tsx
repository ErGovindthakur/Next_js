import { useState } from "react";

const Form = () => {
  const [todo, setTodo] = useState({
    todoTitle: "",
    todoTask:""
  });

  const [submitTodo, setSubmitTodo] = useState<null | typeof todo>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const {name,value} = e.target;
    setTodo((prev)=>{
     return(
          {
               ...prev,
               [name]:value
          }
     )
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(todo)
    setSubmitTodo(todo)
    setTodo({todoTitle:"",todoTask:""})
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="todoTitle"
          placeholder="Enter the title"
          className="input"
          value={todo.todoTitle}
          onChange={handleChange}
        />
        <input
        type="text"
        name="todoTask"
        placeholder="Enter the task"
        className="input"
        value={todo.todoTask}
        onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>


      <div>
          {
               submitTodo && (
                    <div>
                        Title -: {submitTodo.todoTitle},
                        Task -: {submitTodo.todoTask}
                    </div>
               )
          }
      </div>
    </div>
  );
};

export default Form;
