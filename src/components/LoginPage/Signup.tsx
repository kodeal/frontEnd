import styled, { StyledComponent } from "styled-components";
import { AxiosResponse } from "axios";
import * as api from "apis/api";
import FixedTopBar from "components/TopBar/FixedTopBar";
import { useState } from "react";

const SignupMain = styled.div`
  width: 100%;
  height: 100vh;
  opacity: 0.8;
  text-align: center;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignupFrame = styled.div`
  width: 500px;
  height: 700px;
  background-color: #fafafa;
  border-radius: 10px;
  border: 1px solid black;
  margin-top: 1rem;
`;

const Title = styled.div`
  margin-top: 5rem;
  font-weight: bold;
  font-size: 2rem;
`;

const SignupInput = styled.input`
  border-radius: 30px;
  width: 80%;
  padding: 10px;
  margin: 2rem 0rem 0rem 0rem;

  &:focus {
    border: 1px solid blue;
  }
`;
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
`;

const AuthButton = styled.button`
  border-radius: 20px;
  color: red;
  padding: 10px;
  margin: 2rem 0rem 0rem 0rem;
`;

const Auth = styled.div`
  display: flex;
  justify-content: center;
`;

const Signup = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [auth, setAuth] = useState(false);
  let authNum = 0;

  const onEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onSignup = async (e: any) => {
    e.preventDefault();
    console.log(e.target);
    if (auth) {
      const result = await api.signup(
        e.target.name.vaule,
        e.target.id.value,
        e.target.password.value,
        e.target.email.value
      );
      console.log(result);
    }
  };

  const authEmail = async (e: any) => {
    const result: AxiosResponse = await api.authEmail(email);
    console.log(result);
    if (result) {
      authNum = result.data.auth;
    }
  };

  const checkAuthEmail = async (e: any) => {
    const num = e.target.value;
    if (num === authNum) {
      setAuth(true);
    } else {
      alert("이메일 인증 실패");
    }
  };

  return (
    <SignupMain>
      <SignupFrame>
        <FixedTopBar />
        <Title>회원가입</Title>
        <form onSubmit={onSignup}>
          <SignupInput placeholder="아이디" type="text" name="id"></SignupInput>
          <SignupInput placeholder="이름" type="text" name="name"></SignupInput>
          <SignupInput
            placeholder="비밀번호"
            type="password"
            name="password"
          ></SignupInput>
          <SignupInput
            placeholder="비밀번호 확인"
            type="password"
          ></SignupInput>
          <Auth>
            <SignupInput
              placeholder="이메일"
              type="email"
              name="email"
              style={{ width: "70%" }}
              onChange={onEmail}
            ></SignupInput>
            <AuthButton onClick={authEmail}>전송</AuthButton>
          </Auth>
          <Auth>
            <SignupInput
              placeholder="인증번호"
              type="text"
              style={{ width: "70%" }}
            ></SignupInput>
            <AuthButton onClick={checkAuthEmail}>확인</AuthButton>
          </Auth>
          <SignupButton type="submit">회원가입</SignupButton>
        </form>
      </SignupFrame>
    </SignupMain>
  );
};

export default Signup;
