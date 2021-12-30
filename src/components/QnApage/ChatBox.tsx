import SpeechBallonContainer from "containers/SpeechBallonContainer";
import { useSelector } from "react-redux";
import { RootState } from "states/RootReducer";
import styled, { StyledComponent } from "styled-components";
import { useState } from "react";

const Box : StyledComponent<"div", any, {}, never> = styled.div`
    width : 100%;
    background-color: rgb(220, 200, 220);
    border: 1px solid;
    border-radius: 8px;
    margin: 0.6rem;
`;

export default function ChatBox() : JSX.Element{
    const {question, code, isSend} = useSelector((state : RootState) => state.chatting);
    const [chatArr, setChatArr] = useState([]);
    const setSpeechBallon = () => {
        console.log("setSpeechBallon()" + chatArr);
        return <SpeechBallonContainer/>
    }
    return(
        <Box>
            {isSend ? setSpeechBallon() : null}
        </Box>
    );
}