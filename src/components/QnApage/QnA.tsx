import styled from "styled-components";
import FixedTopBar from "components/TopBar/FixedTopBar";
import ChatBox from "./ChatBox";
import ChatInputWindow from "./ChatInputWindow";

const Main = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    opacity: 0.8;
    text-align: center;
    position: absolute;
 `;

export default function QnA() : JSX.Element {
    return(
        <Main>
            <FixedTopBar/>
            <ChatBox/>
            <ChatInputWindow/>
        </Main>
    );
}