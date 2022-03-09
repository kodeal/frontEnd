import SpeechBallonContainer from "/frontEnd/containers/SpeechBallonContainer";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  background-color: rgb(240, 240, 240);
  border: 3px solid #3d3d3d;
  border-radius: 8px;
  margin: 0.6rem;
  overflow-y: scroll;
  margin-top: 6vh;
`;

interface chatBoxProps {
  isSending: boolean;
}

export default function ChatBox(props: chatBoxProps) {
  const boxRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    console.log("scroll");

    boxRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [props.isSending]);

  return (
    <Box ref={boxRef}>
      <SpeechBallonContainer />
    </Box>
  );
}
