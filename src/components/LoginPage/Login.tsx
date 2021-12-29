import styled, {StyledComponent} from "styled-components";
import FixedTopBar from "components/TopBar/FixedTopBar";

const Main : StyledComponent<"div", any, {}, never> = styled.div`
    width: 100%;
    height: 100vh;
    background-color: beige;
    opacity: 0.8;
    text-align: center;
    position: absolute;
`;

export default function Login() : JSX.Element{
    return(
        <Main>
            <FixedTopBar/>
        </Main>
    );
}