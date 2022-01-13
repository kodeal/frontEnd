import styled, {StyledComponent} from "styled-components";
import FixedTopBar from "components/TopBar/FixedTopBar";

const LoginMain : StyledComponent<"div", any, {}, never> = styled.div`
    width: 100%;
    height: 100vh;
    opacity: 0.8;
    text-align: center;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoginFrame = styled.div`
    width: 500px;
    height: 700px;
    background-color: #FAFAFA;
    border-radius: 10px;
    border: 1px solid black;
    margin-top: 1rem;
`;

const LoginTitle = styled.div`
    margin-top: 5rem;
    font-weight: bold;
    font-size: 2rem;
`;

const LoginInput = styled.input`
    border-radius: 30px;
    width: 80%;
    padding: 10px;
    margin: 3rem 0rem 0rem 0rem;

    &:focus{
        border: 1px solid blue;
    }
    
`;

const Button = styled.button`
    font-size: 25px;
    width: 80%;
    font-weight: bold;
    border-radius: 30px;
    padding: 10px;
    margin-top: 50px;

`;


export default function Login(props: any) : JSX.Element{
    return(
        <LoginMain>
            <FixedTopBar/>
            <LoginFrame>
                <LoginTitle>로그인</LoginTitle>
                <form>
                    <LoginInput placeholder="Username"></LoginInput>
                    <LoginInput placeholder="Password"></LoginInput>
                    <Button>Login</Button>
                    <Button>회원가입</Button>
                </form>
            </LoginFrame>
        </LoginMain>
    );
}