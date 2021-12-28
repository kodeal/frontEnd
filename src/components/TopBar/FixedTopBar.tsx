import styled from "styled-components";
import { Link } from 'react-router-dom';

const TopBar = styled.div`
    width: 100%;
    height: 5vh;
    background-color: red;
    display: flex;
    justify-content: space-between;
`;

const TopBarTitle = styled(Link)`
    width: 10%;
    color: white;
    font-size: 2rem;
    margin-left: 30px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
`;

const LoginButton = styled(Link)`
    width: 150px;
    background-color: slateblue;
    border-radius: 20px;
    font-size: 1.55rem;
    color: white;
    margin: 5px 30px 5px 5px;
    text-decoration: none;
`;

export default function FixedTopBar(){
    return(
        <TopBar>
            <TopBarTitle to="/">Kodeal</TopBarTitle>
            <LoginButton to="/login">Sign in</LoginButton>
        </TopBar>
    );
}