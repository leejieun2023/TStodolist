import { useSelector, useDispatch } from "react-redux";
import { Todo, toggleTodo, removeTodo } from "../redux/modules/todoSlice";

const Done: React.FC = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: { todos: Todo[] }) => state.todos);
    const DoneTodo = todos.filter(todo => todo.completed);

    return (
        <div>
            <h2>Done</h2>
            {DoneTodo.map(todo => (
                <div key={todo.id}>
                    <p>{todo.title}</p>
                    <p>{todo.content}</p>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>삭제</button>
                    <button onClick={() => dispatch(toggleTodo(todo.id))}>취소</button>
                </div>
            ))}
        </div>
    )
}

export default Done;