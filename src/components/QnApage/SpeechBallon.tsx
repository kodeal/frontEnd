import styled, { StyledComponent } from "styled-components";
import ReactMarkdown from "react-markdown";

const QuestionBallon = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid;
  color: black;
  font-size: 17px;
  font-weight: 550;
  height: auto;
  letter-spacing: -0.25px;
  margin-top: 6.8px;
  padding: 5px 11px;
  width: fit-content;
  margin: 10px 0px 0px 5px;
`;

const CodeBallon = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid gray;
  color: black;
  font-size: 17px;
  font-weight: 550;
  height: auto;
  letter-spacing: -0.25px;
  margin-top: 6.8px;
  padding: 5px 11px;
  width: fit-content;
  margin: 10px 0px 0px 5px;
`;

type chattingType = {
  time: string;
  question: string;
  code: string;
  who: string;
};

export default function SpeechBallon(props: any): JSX.Element {
  const markDownCode = `
    # 헤딩
    **굵게**
    \`\`\`javascript
    ${props.code}
    \`\`\`
    `;

  return (
    <div>
      <QuestionBallon>
        <pre>{props.question}</pre>
      </QuestionBallon>
      {props?.code?.length > 0 ? (
        <CodeBallon>
          <ReactMarkdown children={markDownCode}></ReactMarkdown>
        </CodeBallon>
      ) : null}
    </div>
  );
}
