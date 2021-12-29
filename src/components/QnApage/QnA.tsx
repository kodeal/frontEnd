import styled, {StyledComponent} from "styled-components";
import FixedTopBar from "components/TopBar/FixedTopBar";
import ChatBox from "./ChatBox";
import ChatInputWindow from "./ChatInput";

const Main : StyledComponent<"div", any, {}, never> = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    opacity: 0.8;
    position: absolute;
 `;

 const DivBox : StyledComponent<"div", any, {}, never> = styled.div`
    display: flex;
    height: 90%;
 `;

export default function QnA() : JSX.Element {
    return(
        <Main>
            <FixedTopBar/>
            <DivBox>
                <ChatBox/>
                <ChatInputWindow/>
            </DivBox>
        </Main>
    );
}