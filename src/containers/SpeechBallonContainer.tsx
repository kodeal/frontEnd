import { useSelector } from "react-redux";
import { RootState } from "../reducer/RootReducer";
import SpeechBallon from "components/QnApage/SpeechBallon";
import { getTime } from "components/QnApage/QnA";
import { useEffect } from "react";

type QuestionState = {
  time: string;
  question: string;
  code: string;
  who: string;
};

const SpeechBallonContainer = (props: any) => {
  const chatArr: QuestionState[] = useSelector(
    (state: RootState) => state.chatting
  );
  const chatArrLength: number = chatArr.length;
  const speechBallonArr: JSX.Element[] = chatArr.map((chat) => (
    <SpeechBallon
      time={chat.time}
      question={chat.question}
      code={chat.code}
      who={chat.who}
    />
  ));

  return chatArrLength > 0 ? speechBallonArr : null;
};

export default SpeechBallonContainer;
