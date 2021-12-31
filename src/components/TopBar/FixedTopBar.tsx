import styled, {StyledComponent} from "styled-components";
import { Link, LinkProps } from 'react-router-dom';

const TopBar : StyledComponent<"div", any, {}, never> = styled.div`
    width: 100%;
    height: 5vh;
    background-color: #E573F5;
    display: flex;
    justify-content: space-between;
    text-align: center;
`;

const TopBarTitle : StyledComponent<React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>, any, {}, never> = styled(Link)`
    width: 10%;
    color: white;
    font-size: 2rem;
    margin-left: 30px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
`;

const LoginButton :  StyledComponent<React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>, any, {}, never> = styled(Link)`
    width: 150px;
    background-color: #FF5E5C;
    border-radius: 20px;
    font-size: 1.55rem;
    color: white;
    margin: 5px 30px 5px 5px;
    text-decoration: none;

    &:hover {
        background-color: #CC4B49; 
    }
`;

export default function FixedTopBar() : JSX.Element {
    return(
        <TopBar>
            <TopBarTitle to="/">Kodeal</TopBarTitle>
            <LoginButton to="/login">Sign in</LoginButton>
        </TopBar>
    );
}