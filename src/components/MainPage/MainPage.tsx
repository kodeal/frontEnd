import styled, {StyledComponent} from 'styled-components';
import { Link } from 'react-router-dom';
import FixedTopBar from 'components/TopBar/FixedTopBar';

const Main : StyledComponent<"div", any, {}, never> = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    font-size: 50px;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    text-align: center;
    position: absolute;
`;


const Title = styled.h1`
    position: absolute;
    top: 45%;
    left: 50%;
    text-align: center;
    color: white;
    transform: translate(-50%, -50%);
`;

const StartButton = styled(Link)`
    position: absolute;
    background-color: slateblue;
    width: 200px;
    height:50px;
    border-radius: 20px;
    top: 55%;
    left: 45%;
    font-size: 2.2rem;
    color: white;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
`;


export default function MainPage() : JSX.Element {

    return(
        <Main>
            <FixedTopBar/>
            <Title>Kodeal</Title>
            <StartButton to="/QnA">START</StartButton>
        </Main>
    );
}