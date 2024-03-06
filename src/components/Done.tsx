import { useSelector, useDispatch } from "react-redux";
import { Todo, toggleTodo, removeTodo } from "../redux/modules/todoSlice";
import styled from "styled-components";

const Done: React.FC = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: { todos: Todo[] }) => state.todos);
    const DoneTodo = todos.filter(todo => todo.completed);

    return (
        <Stcontainer>
            <Sth2>Done 🙆🏻‍♀️</Sth2>
            {DoneTodo.map(todo => (
                <Stdiv key={todo.id}>
                    <div>
                        <p>제목 : {todo.title}</p>
                        <p>내용 : {todo.content}</p>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>🗑</button>
                        <button onClick={() => dispatch(toggleTodo(todo.id))}>✖</button>
                    </div>
                </Stdiv>
            ))}
        </Stcontainer>
    )
}

const Stcontainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Sth2 = styled.h2`
    font-size: 40px;
`;
const Stdiv = styled.div`
    width: 550px;
    height: 130px;
    border-radius: 15px;
    background-color: #f1f1f0;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0px 0px 3px black;
    margin-bottom: 10px;
`;

export default Done;