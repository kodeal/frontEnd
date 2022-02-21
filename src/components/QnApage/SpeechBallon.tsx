import styled, { StyledComponent } from "styled-components";
import { mainLogo } from "images/index";
import { fadeIn } from "animations/animation";

const UserBallon = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  word-break: break-all;
  align-items: flex-end;
  margin-right: 5px;
  margin-top: 5px;
  animation: ${fadeIn} linear 0.2s;
`;

const KodealBallon = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  word-break: break-all;
  align-items: flex-start;
  margin-left: 5px;
  margin-top: 5px;
  animation: ${fadeIn} linear 0.2s;
`;

const KodealProfile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const KodealProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
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
  margin-top: 5px;
  max-width: 500px;
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
  max-width: 500px;
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
      <KodealProfile>
        <KodealProfileImage src={mainLogo} />
        <div
          style={{ lineHeight: "1.9", textAlign: "center", fontWeight: "600" }}
        >
          Kodeal
        </div>
      </KodealProfile>
      <QuestionBallon>
        <pre>{props.question}</pre>
      </QuestionBallon>
      {props?.code?.length > 0 ? <CodeBallon>{props.code}</CodeBallon> : null}
    </KodealBallon>
  );
}
