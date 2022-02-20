import styled, { StyledComponent } from "styled-components";
import ReactMarkdown from "react-markdown";

const UserBallon = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const KodealBallon = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const QuestionBallon = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid;
  color: black;
  font-size: 17px;
  font-weight: 550;
  letter-spacing: -0.25px;
  margin-top: 6.8px;
  padding: 5px 11px;
  margin: 10px 0px 0px 5px;
`;

const CodeBallon = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid gray;
  color: black;
  font-size: 17px;
  font-weight: 550;
  letter-spacing: -0.25px;
  margin-top: 6.8px;
  padding: 5px 11px;
  margin: 10px 0px 0px 5px;
`;

type chattingType = {
  time: string;
  question: string;
  code: string;
  who: string;
};

export default function SpeechBallon(props: chattingType): any {
  return props.who === "user" ? (
    <UserBallon>
      <QuestionBallon>
        <pre>{props.question}</pre>
      </QuestionBallon>
      {props?.code?.length > 0 ? <CodeBallon>{props.code}</CodeBallon> : null}
    </UserBallon>
  ) : (
    <KodealBallon>
      <QuestionBallon>
        <pre>{props.question}</pre>
      </QuestionBallon>
      {props?.code?.length > 0 ? <CodeBallon>{props.code}</CodeBallon> : null}
    </KodealBallon>
  );
}
