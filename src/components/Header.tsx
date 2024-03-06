import { addTodo } from "../redux/modules/todoSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Header: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // 제목, 내용이 없는 경우에 추가하지 않음
        if (!title.trim() || !content.trim()) {
            alert("제목 또는 내용을 입력해주세요.")
            return;
        }
        // 새로운 투두 항목의 id는 현재 시간값을 사용
        const newTodo = { id: Date.now(), title, content, completed: false };
        dispatch(addTodo(newTodo));
        // 추가된 후에는 입력 필드 초기화
        setTitle("");
        setContent("");
    };

    return (
        <Stform onSubmit={handleSubmit}>
            <Stinput 
            type="text" 
            value={title} 
            onChange={(event) => setTitle(event.target.value)}
            placeholder=" 제목"
            />
            <Stinput 
            type="text"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder=" 내용"
            />
            <Stbutton type="submit">추가하기</Stbutton>
        </Stform>
    );
};

const Stform = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Stinput = styled.input`
    width: 200px;
    height: 20px;
    border-radius: 3px;
    margin-left: 15px;
    border: none;
`;
const Stbutton = styled.button`
    width: 80px;
    border-radius: 50px;
    margin-left: 30px;
    border: none;
    cursor: pointer;
`;

export default Header;