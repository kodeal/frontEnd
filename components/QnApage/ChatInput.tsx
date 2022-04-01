import { useDispatch } from 'react-redux';
import styled, { StyledComponent } from 'styled-components';
import { updateQuestion } from 'reducer/Chatting';
import { useCallback, useState } from 'react';
import { sendQuestion } from 'utils/apis/api';
import { getTime } from 'pages/qna';
import { useCookies } from 'react-cookie';
import Tag from './Tag';

const ChatWindow: StyledComponent<'div', any, {}, never> = styled.div`
  width: 50%;
  border: 3px solid #333;
  background-color: white;
  display: flex;
  margin: 0.6rem;
  border-radius: 8px;
  margin-top: 6vh;

  @media only screen and (max-width: 1200px) {
    width: 100%;
    height: 45vh;
    margin: 10px 0 0 0;
    border-radius: 0px;
  }
`;

const InputText: StyledComponent<'textarea', any, {}, never> = styled.textarea`
  width: 47vw;
  height: 70vh;
  line-height: 1.6rem;
  font-size: 20px;
  background-color: white;
  border-radius: 5px;
  flex-grow: 1;
  margin: 0.6rem;
  resize: none;
  padding-top: 8px;
  padding-left: 8px;
  @media only screen and (max-width: 1200px) {
    width: 95vw;
    height: 28vh;
  }
`;

const TextDiv: StyledComponent<'div', any, {}, never> = styled.div`
  margin-left: 0.6rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const SendButton: StyledComponent<'button', any, {}, never> = styled.button`
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

export default function ChatInputWindow(props: any): JSX.Element {
  const [question, setQuestion] = useState('');
  const [code, setCode] = useState('');
  const [key, setKey] = useState(0);
  const [language, setLanguage] = useState('');
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(['userInfo']);

  const handleQuestion = useCallback((e: any): void => {
    setQuestion(e.target.value);
  }, []);

  const handleLanguage = (e: any) => {
    setLanguage(e.target.innerText);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setKey(key + 1);
    const time: string = getTime();
    sendQuestion(cookies.userInfo.userid, question, code, time, language)
      .then((result) => {
        dispatch(updateQuestion(time, '', result.data.answer, 'kodeal'));
        setQuestion('');
        setCode('');
        e.target.reset();
        props.setIsSending(false);
      })
      .catch((error) => {
        const errorMsg = `코딜에게 문제가 생겼나봐요 😓\n
        다시 질문해주세요!`;
        dispatch(updateQuestion(time, '', errorMsg, 'kodeal'));
        e.target.reset();
        props.setIsSending(false);
      });
    dispatch(updateQuestion(time, question, code, 'user'));
    props.setIsSending(true);
  };

  return (
    <ChatWindow>
      <form onSubmit={handleSubmit}>
        <TextDiv>
          <div style={{ lineHeight: '3.5vh' }}>Question</div>
          <SendButton disabled={!question}>전송</SendButton>
        </TextDiv>
        <Tag handleLanguage={handleLanguage} />

        <InputText
          placeholder="질문해 주세요!"
          onChange={handleQuestion}
        ></InputText>
      </form>
    </ChatWindow>
  );
}
