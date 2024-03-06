import { useSelector, useDispatch } from "react-redux";
import { Todo, toggleTodo, removeTodo } from "../redux/modules/todoSlice";

const Working: React.FC = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: { todos: Todo[] }) => state.todos);
    const WorkingTodos = todos.filter(todo => !todo.completed);

    return (
        <div>
            <h2>Working</h2>
            {WorkingTodos.map(todo => (
                <div key={todo.id}>
                    <div>
                        <p>{todo.title}</p>
                        <p>{todo.content}</p>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>삭제</button>
                        <button onClick={() => dispatch(toggleTodo(todo.id))}>완료</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Working;