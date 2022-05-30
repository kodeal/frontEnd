import { useDispatch, useSelector } from 'react-redux';
import SpeechBallon from 'components/QnApage/SpeechBallon';
import { useCallback, useEffect, useRef } from 'react';
import * as apis from '../utils/apis/api';
import { updateQuestion } from '../reducer/Chatting';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';

type QuestionState = {
  time: string;
  question: string;
  code: string;
  who: string;
};

// type userState = {
//   id: string;
//   password: string;
//   name: string;
//   email: string;
// };

const SpeechBallonContainer = (props: any) => {
  const chatArr: QuestionState[] = useSelector((state: any) => state.Chatting);
  const [cookies, setCookie, removeCookie] = useCookies(['userInfo']);
  const router = useRouter();
  const boxRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const scrollToBottom = () => {
    boxRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  };

  useEffect(() => {
    if (cookies.userInfo) {
      (async () => {
        const result = await apis.chattingLog(cookies.userInfo.userid); // 사용자의 채팅 내역 불러오기
        console.log(result.data);
        if (result.status === 200) {
          result.data.items.forEach((value: any) => {
            const time: string = value.fields.time;
            const question: string = value.fields.question;
            const code: string = value.fields.code;
            setChattingLog(time, question, code);
          });
        }
      })();
    } else {
      alert('로그인 후 이용해주세요.');
      router.push('/');
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [props.isSending]);

  const setChattingLog = useCallback(
    // 사용자의 채팅 내역 로컬에 저장
    (time: string, question: string, code: string) => {
      dispatch(updateQuestion(time, question, '', 'user'));
      dispatch(updateQuestion(time, '', code, 'kodeal'));
    },
    [dispatch],
  );

  const speechBallonArr = chatArr.map((chat, index) => (
    <SpeechBallon
      key={index}
      time={chat.time}
      question={chat.question}
      code={chat.code}
      who={chat.who}
    />
  ));

  if (speechBallonArr.length === 0) {
    // 처음 사용하는 사용자에게 안내 문구 출력
    speechBallonArr.push(
      <SpeechBallon
        time={''}
        question={
          '안녕하세요. 저는 인공지능 코딩 도우미 코딜이에요.\r\n궁금한게 있으시면 무엇이든 물어보세요.'
        }
        code={''}
        who={'kodeal'}
      />,
    );
  }

  return <div ref={boxRef}>{speechBallonArr}</div>;
};

export default SpeechBallonContainer;
