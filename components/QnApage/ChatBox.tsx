import Loading from 'components/util/Loading';
import SpeechBallonContainer from 'containers/SpeechBallonContainer';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 50%;
  background-color: rgb(240, 240, 240);
  border: 3px solid #3d3d3d;
  border-radius: 8px;
  margin: 0.6rem;
  overflow-y: scroll;
  margin-top: 6vh;
  @media only screen and (max-width: 1200px) {
    width: 100%;
    height: 50vh;
    margin: 0 auto;
    border-radius: 0px;
  }
`;

interface chatBoxProps {
  isSending: boolean;
}

export default function ChatBox(props: chatBoxProps) {
  return (
    <Box>
      <SpeechBallonContainer isSending={props.isSending} />
      {props.isSending ? <Loading /> : null}
    </Box>
  );
}
