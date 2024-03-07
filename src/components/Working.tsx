import { Todo } from "../redux/modules/todoSlice";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTodos, deleteTodo, updateTodo } from "../api/todos";
import styled from "styled-components";

const Working: React.FC = () => {
    const queryClient = useQueryClient();
    const { data: todos, isLoading, error } = useQuery("todos", getTodos);
    const deleteMutation = useMutation(deleteTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos");
        },
    });
    const updateMutation = useMutation(updateTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos");
        },
    });

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    if (error) {
        const err = error as Error;
        return <div>{err.message}</div>;
    }
    const WorkingTodos = todos?.filter((todo: Todo) => !todo.completed);

    return (
        <Stcontainer>
            <Sth2>Working 🙋🏻‍♀️</Sth2>
            {WorkingTodos.length > 0 ? (
                WorkingTodos.map((todo: Todo) => (
                    <Stdiv key={todo.id}>
                        <div>
                            <Sttitle>제목 : {todo.title}</Sttitle>
                            <Stcontent>{todo.content}</Stcontent>
                            <Stbuttondiv>
                                <Stbutton onClick={() => deleteMutation.mutate(todo.id)}>🗑️</Stbutton>
                                <Stbutton onClick={() => updateMutation.mutate({
                                    id: todo.id, updatedTodo: {
                                        title: todo.title,
                                        content: todo.content,
                                        completed: !todo.completed
                                    }
                                })}>✔️</Stbutton>
                            </Stbuttondiv>
                        </div>
                    </Stdiv>
                ))
            ) : (
                <Stp>오늘의 ToDoList를 생성해보세요!</Stp>
            )}
        </Stcontainer>
    );
};

const Stcontainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px;
`;
const Sth2 = styled.h2`
    font-size: 35px;
`;
const Stp = styled.p`
    font-weight: bold;
`;
const Sttitle = styled.h3`
    margin-left: 15px;
    font-weight: bold;
`;
const Stcontent = styled.p`
    margin-left: 20px;
    font-size: 14px;
`;
const Stbutton = styled.button`
    width: 50px;
    font-size: 15px;
    margin-right: 10px;
    border: none;
    cursor: pointer;
    background-color: #e0f3f4;
    box-shadow: 0px 0px 2px black;
    border-radius: 50%;
`;
const Stbuttondiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: 225px;
`;
const Stdiv = styled.div`
    width: 550px;
    height: 130px;
    border-radius: 15px;
    background-color: #f1f1f0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 3px black;
    margin-bottom: 10px;
`;

export default Working;