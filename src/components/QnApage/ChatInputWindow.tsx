import styled from "styled-components";

const ChatWindow = styled.div`
    width: 100%;
    border: solid 1px;
    background-color: white;
    display: flex;
`;

const InputText = styled.textarea`
    width: 100%;
    font-size: 50px;
    background-color: white;
    border-radius: 10px;
    flex-grow: 1;
`;

export default function ChatInputWindow() :JSX.Element {
    return(
        <ChatWindow>
            <form>
                <InputText placeholder="질문해 주세요!"></InputText>
            </form>
        </ChatWindow>
    );
}