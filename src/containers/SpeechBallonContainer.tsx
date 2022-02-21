import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducer/RootReducer";
import SpeechBallon from "components/QnApage/SpeechBallon";
import { getTime } from "components/QnApage/QnA";
import { useCallback, useEffect } from "react";
import { appendFileSync } from "fs";
import * as apis from "apis/api";
import { updateQuestion } from "reducer/Chatting";

type QuestionState = {
  time: string;
  question: string;
  code: string;
  who: string;
};

type userState = {
  id: string;
  password: string;
  name: string;
  email: string;
};

const SpeechBallonContainer = () => {
  const chatArr: QuestionState[] = useSelector(
    (state: RootState) => state.chatting
  );
  const user: userState = useSelector((state: RootState) => state.User);

  console.log(chatArr);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const result = await apis.chattingLog(user.id);
      if (result.status === 200) {
        result.data.items.forEach((value: any) => {
          const time: string = value.fields.time;
          const question: string = value.fields.question;
          const code: string = value.fields.code;
          setChattingLog(time, question, code);
        });
      }
    })();
  }, []);

  const setChattingLog = useCallback(
    (time: string, question: string, code: string) => {
      dispatch(updateQuestion(time, question, code, "user"));
    },
    [dispatch]
  );

  const speechBallonArr = chatArr.map((chat) => (
    <SpeechBallon
      time={chat.time}
      question={chat.question}
      code={chat.code}
      who={chat.who}
    />
  ));

  if (speechBallonArr.length === 0) {
    speechBallonArr.push(
      <SpeechBallon
        time={""}
        question={
          "안녕하세요. 저는 인공지능 코딩 도우미 코딜이에요.\r\n궁금한게 있으시면 무엇이든 물어보세요."
        }
        code={""}
        who={"kodeal"}
      />
    );
  }

  return <div>{speechBallonArr}</div>;
};

export default SpeechBallonContainer;
