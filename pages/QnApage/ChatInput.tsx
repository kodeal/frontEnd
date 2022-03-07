import { useDispatch, useSelector } from "react-redux";
import styled, { StyledComponent } from "styled-components";
import { updateQuestion } from "/frontEnd/src/reducer/Chatting";
import { useCallback, useState } from "react";
import { sendQuestion } from "/frontEnd/src/apis/api";
import { getTime } from "./QnA";
import { useCookies } from "react-cookie";

const ChatWindow: StyledComponent<"div", any, {}, never> = styled.div`
  border: 3px solid #333;
  background-color: white;
  display: flex;
  margin: 0.6rem;
  border-radius: 8px;
  margin-top: 6vh;
`;

const InputText: StyledComponent<"textarea", any, {}, never> = styled.textarea`
  width: 100vh;
  height: 92%;
  line-height: 1.6rem;
  font-size: 20px;
  background-color: white;
  border-radius: 5px;
  flex-grow: 1;
  margin: 0.6rem;
  resize: none;
  padding-top: 8px;
  padding-left: 8px;
`;

const TextDiv: StyledComponent<"div", any, {}, never> = styled.div`
  margin-left: 0.6rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

// const InputCode: StyledComponent<"textarea", any, {}, never> = styled.textarea`
//   width: 100vh;
//   height: 45vh;
//   line-height: 1.6rem;
//   font-size: 15px;
//   background-color: white;
//   border-radius: 5px;
//   flex-grow: 1;
//   margin: 0.6rem;
//   resize: none;
// `;

const SendButton: StyledComponent<"button", any, {}, never> = styled.button`
  width: 6rem;
  height: 2rem;
  border-radius: 8px;
  background-color: #7e5ffa;
  margin-right: 0.6rem;
  margin-top: 0.2rem;
  font-weight: bold;
  color: white;

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #644cc8;
  }
`;

// type ChattingProps = {
//     addQuestion(): void,
//     deleteQuestion(): void,
//     addCode(): void,
//     deleteCode(): void,
//     sendChatting(): void,
// }

type userState = {
  id: string;
  password: string;
  name: string;
  email: string;
};

export default function ChatInputWindow(props: any): JSX.Element {
  const [question, setQuestion] = useState("");
  const [code, setCode] = useState("");
  const [key, setKey] = useState(0);
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(["userInfo"]);

  const handleQuestion = useCallback((e: any): void => {
    setQuestion(e.target.value);
  }, []);

  const handleCode = useCallback((e: any): void => {
    setCode(e.target.value);
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setKey(key + 1);
    const time: string = getTime();
    const result = await sendQuestion(
      cookies.userInfo.userid,
      question,
      code,
      time
    );
    if (result.status === 200) {
      dispatch(updateQuestion(time, question, code, "user"));
      dispatch(updateQuestion(time, "", result.data.answer, "kodeal"));
      props.setIsSending(true);
      setQuestion("");
      setCode("");
      e.target.reset();
    }
  };

  return (
    <ChatWindow>
      <form onSubmit={handleSubmit}>
        <TextDiv>
          <div style={{ lineHeight: "3.5vh" }}>Question</div>
          <SendButton disabled={!question}>전송</SendButton>
        </TextDiv>
        <InputText
          placeholder="질문해 주세요!"
          onChange={handleQuestion}
        ></InputText>
      </form>
    </ChatWindow>
  );
}
