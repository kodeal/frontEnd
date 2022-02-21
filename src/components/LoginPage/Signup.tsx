import styled from "styled-components";
import { AxiosResponse } from "axios";
import * as api from "apis/api";
import FixedTopBar from "components/TopBar/FixedTopBar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "reducer/User";
import { fadeIn } from "animations/animation";

const SignupMain = styled.div`
  width: 100%;
  height: 100vh;
  opacity: 0.8;
  text-align: center;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
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
  border-radius: 8px;
  width: 80%;
  padding: 10px;
  margin: 2rem 0rem 0rem 0rem;
  animation: ${fadeIn} linear 0.5s;
  background-color: #ededed;
  border: none;

  &:focus {
    background-color: white;
    height: 30px;
  }
`;
const SignupButton = styled.button`
  display: block;
  font-size: 25px;
  width: 278px;
  font-weight: bold;
  border-radius: 8px;
  padding: 10px;
  margin-top: 50px;
  background-color: #f7f7f7;
  text-decoration: none;
  margin: auto;
  border: 1px solid #ff5e5c;
  color: white;
  margin-top: 25px;
  cursor: pointer;
  background-color: #ff5e5c;

  &:hover {
    background-color: #cc4b49;
  }
`;

const AuthButton = styled.button`
  border-radius: 8px;
  font-weight: bold;
  padding: 10px;
  margin: 2rem 0rem 0rem 0rem;
  animation: ${fadeIn} linear 0.5s;
  border: 1px solid black;
`;

const Auth = styled.div`
  display: flex;
  justify-content: center;
`;

const Signup = (): JSX.Element => {
  const [userid, setUserid] = useState("");
  const [email, setEmail] = useState("");
  const [auth, setAuth] = useState(false);
  const [userAuthNum, setUserAuthNum] = useState("");
  const dispatch = useDispatch();

  const checkKor = (str: string) => {
    const korRegExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
    return korRegExp.test(str) ? true : false;
  };

  const onId = (e: any) => {
    if (userid.length < 6 && checkKor(e.target.value)) {
      console.log(userid);

      setUserid(e.target.value);
    }
  };
  const onEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onEmailAuthNum = (e: any) => {
    setUserAuthNum(e.target.value);
  };

  const onSignup = async (e: any) => {
    e.preventDefault();
    console.log(e.target);
    const name: string = e.target.name.vaule;
    const id: string = e.target.id.value;
    const password: string = e.target.password.value;
    const email: string = e.target.email.value;
    if (auth) {
      const result = await api.signup(name, id, password, email);

      if (result.status === 200) {
        alert("회원가입 성공");
        dispatch(updateUserInfo(id, password, name, email));
      } else {
        alert("회원가입 실패");
      }
    }
  };

  const authEmail = async (e: any) => {
    const result: AxiosResponse = await api.authEmail(email);
    console.log(result);
  };

  const authEmailNum = async (e: any) => {
    const result = await api.authEmailNum(email, userAuthNum);
    if (result.status === 200) {
      alert("메일 인증 성공");
      setAuth(true);
    } else {
      alert("메일 인증 실패");
    }
  };

  return (
    <SignupMain>
      <SignupFrame>
        <FixedTopBar />
        <Title>회원가입</Title>
        <form onSubmit={onSignup}>
          <SignupInput
            onChange={onId}
            placeholder="아이디"
            type="text"
            name="id"
          ></SignupInput>
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
              onChange={onEmailAuthNum}
            ></SignupInput>
            <AuthButton onClick={authEmailNum}>확인</AuthButton>
          </Auth>
          <SignupButton type="submit">회원가입</SignupButton>
        </form>
      </SignupFrame>
    </SignupMain>
  );
};

export default Signup;
