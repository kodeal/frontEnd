import { useDispatch } from "react-redux";
import styled, { StyledComponent } from "styled-components";
import { updateQuestion } from "states/Chatting";
import { useCallback, useState } from "react";

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
    height: 20rem;
    line-height: 1.6rem;
    font-size: 15px;
    background-color: white;
    border-radius: 5px;
    flex-grow: 1;
    margin: 0.6rem;
    resize: none;
`;

const SendButton : StyledComponent<"button", any, {}, never> = styled.button`
    width: 6rem;
    height: 2rem;
    border-radius: 8px;
    background-color: blue;
    margin-right: 0.6rem;
    margin-top: 0.2rem;
    font-weight: bold;
    color: white;

    &:disabled{
        background-color: gray;
        cursor: not-allowed;
    }
`;

// type ChattingProps = {
//     addQuestion(): void,
//     deleteQuestion(): void,
//     addCode(): void,
//     deleteCode(): void,
//     sendChatting(): void,
// }

export default function ChatInputWindow() :JSX.Element {
    const [question, setQuestion] = useState("");
    const [code, setCode] = useState("");
    const [key, setKey] = useState(0);
    const dispatch = useDispatch();

    const handleQuestion = useCallback((e : any) : void => {
        setQuestion(e.target.value);
    }, []);

    const handleCode = (e : any) : void => {
        setCode(e.target.value);
    };

    const handleSubmit = (e : any) : void => {
        e.preventDefault();
        setKey(key + 1);
        dispatch(updateQuestion(key, question, code, "user"));
        setQuestion("");
        setCode("");
        e.target.reset();
    }

    return(
        <ChatWindow>
            <form onSubmit={handleSubmit}>
                <TextDiv>Question
                    <SendButton disabled={!question}>전송</SendButton>
                </TextDiv>
                <InputText placeholder="질문해 주세요!" onChange={handleQuestion}></InputText>
                <TextDiv>Code</TextDiv>
                <pre>
                    <InputCode placeholder="코드를 입력해 주세요!" onChange={handleCode}></InputCode>
                </pre>
            </form>
        </ChatWindow>

    );
}