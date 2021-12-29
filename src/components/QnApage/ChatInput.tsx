import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { StyledComponent } from "styled-components";
import { updateQuestion, updateCode, sendChatting } from "states/Chatting";
import { RootState } from "states/RootReducer";

const ChatWindow : StyledComponent<"div", any, {}, never> = styled.div`
    border: solid 1px;
    background-color: white;
    display: flex;
    margin: 0.6rem;
    border-radius: 8px;
`;

const InputText : StyledComponent<"textarea", any, {}, never> = styled.textarea`
    width: 100vh;
    height: 20rem;
    line-height: 1.6rem;
    font-size: 20px;
    background-color: white;
    border-radius: 5px;
    flex-grow: 1;
    margin: 0.6rem;
    resize: none;

`;

const TextDiv : StyledComponent<"div", any, {}, never> = styled.div`
    margin-left: 0.6rem;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    text-align: center;

`;

const InputCode : StyledComponent<"textarea", any, {}, never> = styled.textarea`
    width: 100vh;
    height: 25rem;
    line-height: 1.6rem;
    font-size: 15px;
    background-color: white;
    border-radius: 5px;
    flex-grow: 1;
    margin: 0.6rem;
    resize: none;
`;

const SendButton = styled.button`
    width: 3rem;
    height: 2rem;
    border-radius: 8px;
    background-color: skyblue;
    margin-right: 0.6rem;
    margin-top: 0.2rem;
`;

type ChattingProps = {
    addQuestion(): void,
    deleteQuestion(): void,
    addCode(): void,
    deleteCode(): void,
    sendChatting(): void,
}

export default function ChatInputWindow() :JSX.Element {
    //const [question, setQuestion] = useState("");
    //const [code, setCode] = useState("");
    //const [isSend, setIsSend] = useState(false);

    const {question, code, isSend} = useSelector((state : RootState) => state.chatting);
    const dispatch = useDispatch();

    const handleQuestion = (e : any) : void => {
        dispatch(updateQuestion(e.target.value));
        console.log(question);
    };

    const handleCode = (e : any) : void => {
        dispatch(updateCode(e.target.value));
        console.log(code);
    };

    const handleSubmit = (e : any) : void => {
        e.preventDefault();
        console.log(`question : ${question}`);
    }

    return(
        <ChatWindow>
            <form onSubmit={handleSubmit}>
                <TextDiv>Question
                    <SendButton>전송</SendButton>
                </TextDiv>
                <InputText placeholder="질문해 주세요!" onChange={handleQuestion}></InputText>
                <TextDiv>Code</TextDiv>
                <InputCode placeholder="코드를 입력해 주세요!" onChange={handleCode}></InputCode>
            </form>
        </ChatWindow>

    );
}