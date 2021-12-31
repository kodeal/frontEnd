import SpeechBallonContainer from "containers/SpeechBallonContainer";
import styled, { StyledComponent } from "styled-components";

const Box : StyledComponent<"div", any, {}, never> = styled.div`
    width : 100%;
    background-color: rgb(240, 240, 240);
    border: 1px solid;
    border-radius: 8px;
    margin: 0.6rem;
    overflow-y: scroll;
`;

export default function ChatBox() : JSX.Element{

    return(
        <Box>
            {SpeechBallonContainer()}
        </Box>
    );
}