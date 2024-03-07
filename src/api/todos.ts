import axios from "axios";

type Todo = {
    id: number;
    title: string;
    content: string;
    completed: boolean;
};

const getTodos = async () => {
  const response = await axios.get("http://localhost:3001/todos");
  return response.data;
};
const addTodo = async (newTodo: Omit<Todo, 'id'>) => {
    const response = await axios.post("http://localhost:3001/todos", newTodo);
    return response.data;
};
const deleteTodo = async (id: number) => {
    const response = await axios.delete(`http://localhost:3001/todos/${id}`);
    return response.data;
};

export { getTodos, addTodo, deleteTodo };