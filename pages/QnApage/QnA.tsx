import styled, { StyledComponent } from "styled-components";
import FixedTopBar from "/frontEnd/pages/TopBar/FixedTopBar";
import ChatBox from "./ChatBox";
import ChatInputWindow from "./ChatInput";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Main: StyledComponent<"div", any, {}, never> = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #333;
  position: absolute;
`;

const DivBox: StyledComponent<"div", any, {}, never> = styled.div`
  display: flex;
  height: 90%;
`;

export const getTime = (): string => {
  const today = new Date();

  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);

  const dateString = year + "-" + month + "-" + day;
  const hours = ("0" + today.getHours()).slice(-2);
  const minutes = ("0" + today.getMinutes()).slice(-2);
  const seconds = ("0" + today.getSeconds()).slice(-2);
  const timeString = hours + ":" + minutes + ":" + seconds;

  return `${dateString} ${timeString}`;
};

export default function QnA(): JSX.Element {
  const [isSending, setIsSending] = useState<boolean>(false);
  const dispatch = useDispatch();

  return (
    <Main>
      <FixedTopBar />
      <DivBox>
        <ChatBox isSending={isSending} />
        <ChatInputWindow setIsSending={setIsSending} />
      </DivBox>
    </Main>
  );
}
