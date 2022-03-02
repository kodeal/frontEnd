import SpeechBallonContainer from "containers/SpeechBallonContainer";
import styled, { StyledComponent } from "styled-components";

const Box: StyledComponent<"div", any, {}, never> = styled.div`
  width: 100%;
  background-color: rgb(240, 240, 240);
  border: 3px solid #3d3d3d;
  border-radius: 8px;
  margin: 0.6rem;
  overflow-y: scroll;
  margin-top: 6vh;
`;

export default function ChatBox() {
  return (
    <Box>
      <SpeechBallonContainer />
    </Box>
  );
}
