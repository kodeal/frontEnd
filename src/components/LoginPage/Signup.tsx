import styled, {StyledComponent} from "styled-components"
import { AxiosResponse } from "axios";
import * as api from "apis/api";


const SignupMain = styled.div`
    width: 100%;
    height: 100vh;
    opacity: 0.8;
    text-align: center;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SignupFrame = styled.div`
    width: 500px;
    height: 700px;
    background-color: #FAFAFA;
    border-radius: 10px;
    border: 1px solid black;
    margin-top: 1rem;
`

const Title = styled.div`
    margin-top: 5rem;
    font-weight: bold;
    font-size: 2rem;
`

const SignupInput = styled.input`
    border-radius: 30px;
    width: 80%;
    padding: 10px;
    margin: 2rem 0rem 0rem 0rem;

    &:focus{
        border: 1px solid blue;
    }
    
`

const SignupButton = styled.button`
    display: block;
    font-size: 25px;
    width: 278px;
    font-weight: bold;
    border-radius: 30px;
    padding: 10px;
    margin-top: 50px;
    background-color: #f7f7f7;
    text-decoration: none;
    margin: auto;
    border: 1px solid black;
    color: black;
    margin-top: 25px;

`

const Signup = (): JSX.Element => {

    const onSignup = async (e: any) => {
        
        e.preventDefault()
        console.log(e.target)
        const result = await api.signup(e.target.name.vaule, e.target.id.value, e.target.password.value, e.target.email.value)
        console.log(result);
        
        
    }
    

    return (
        <SignupMain>
            <SignupFrame>
                <Title>회원가입</Title>
                <form onSubmit={onSignup}>
                    <SignupInput placeholder="아이디" type="text" name="id"></SignupInput>
                    <SignupInput placeholder="이름" type="text" name="name"></SignupInput>
                    <SignupInput placeholder="비밀번호" type="password" name="password"></SignupInput>
                    <SignupInput placeholder="비밀번호 확인" type="password"></SignupInput>
                    <SignupInput placeholder="이메일" type="email" name="email"></SignupInput>
                    <SignupInput placeholder="인증번호" type="text"></SignupInput>
                    <SignupButton type="submit">회원가입</SignupButton>
                </form>
            </SignupFrame>
        </SignupMain>
    )
}

export default Signup