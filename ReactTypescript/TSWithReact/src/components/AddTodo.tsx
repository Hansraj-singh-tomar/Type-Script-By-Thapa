import { FormEvent, useState } from "react";
import { useTodos } from "../store/todos";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddToDo } = useTodos();

  function handleFormSubmit(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    handleAddToDo(todo);
    setTodo("");
  }

  return (
    <form action="" onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTodo(e.target.value)
        }
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
