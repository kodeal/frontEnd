import styled, { StyledComponent } from "styled-components";
import FixedTopBar from "components/TopBar/FixedTopBar";
import { useCallback, useState } from "react";
import { AxiosResponse } from "axios";
import * as api from "apis/api";
import { Link, LinkProps } from "react-router-dom";

const LoginMain: StyledComponent<"div", any, {}, never> = styled.div`
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
  background-color: #fafafa;
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

  &:focus {
    border: 1px solid blue;
  }
`;

const SigninButton = styled.button`
  font-size: 25px;
  width: 300px;
  font-weight: bold;
  border-radius: 30px;
  padding: 10px;
  margin-top: 50px;
  background-color: #f7f7f7;
  border: 1px solid black;
`;
const SignupButton: StyledComponent<
  React.ForwardRefExoticComponent<
    LinkProps & React.RefAttributes<HTMLAnchorElement>
  >,
  any,
  {},
  never
> = styled(Link)`
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

export default function Login(props: any): JSX.Element {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const handleId = useCallback(
    (e: any) => {
      setId(e.target.value);
    },
    [id]
  );

  const handlePwd = useCallback(
    (e: any) => {
      setPwd(e.target.value);
    },
    [pwd]
  );

  const login = async (e: any) => {
    e.preventDefault();
    const result = await api.login(id, pwd);
    console.log(result);

    if (result) {
      alert("로그인 성공");
    } else {
      alert("로그인 실패");
    }
  };

  return (
    <LoginMain>
      <FixedTopBar />
      <LoginFrame>
        <LoginTitle>로그인</LoginTitle>
        <form>
          <LoginInput
            type="text"
            placeholder="ID"
            onChange={handleId}
          ></LoginInput>
          <LoginInput
            type="password"
            placeholder="Password"
            onChange={handlePwd}
          ></LoginInput>
          <div>
            <SigninButton onClick={login}>Login</SigninButton>
            <SignupButton to="/signup">회원가입</SignupButton>
          </div>
        </form>
      </LoginFrame>
    </LoginMain>
  );
}
