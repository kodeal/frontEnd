import styled from 'styled-components';
import FixedTopBar from 'components/TopBar/FixedTopBar';
import { useCallback, useState } from 'react';
import * as api from 'utils/apis/api';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from 'reducer/User';
import { fadeIn, inputFocus } from 'utils/animations/animation';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';

const LoginMain = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
`;

const LoginFrame = styled.div`
  width: 500px;
  height: 700px;
  background-color: #fafafa;
  border-radius: 10px;
  margin-top: 1rem;
`;

const LoginTitle = styled.div`
  margin-top: 5rem;
  font-weight: bold;
  font-size: 2rem;
`;

const LoginInput = styled.input`
  margin: 40px 0px 5px 0px;
  border-radius: 8px;
  background-color: #ededed;
  width: 80%;
  padding: 10px;
  height: 35px;
  border: none;
  animation: ${fadeIn} linear 0.5s;
  font-size: 20px;

  &:focus {
    background-color: white;
    height: 45px;
    animation: ${inputFocus} linear 0.1s;
  }
`;

const SigninButton = styled.button`
  font-size: 25px;
  width: 300px;
  font-weight: bold;
  border-radius: 10px;
  padding: 10px;
  margin-top: 50px;
  border: 1px solid #0064ff;
  cursor: pointer;
  background-color: #0064ff;
  color: white;
  &:hover {
    background-color: #0052d1;
  }
`;
const SignupButton = styled.a`
  display: block;
  font-size: 25px;
  width: 278px;
  font-weight: bold;
  border-radius: 10px;
  padding: 10px;
  margin-top: 50px;
  background-color: #f7f7f7;
  text-decoration: none;
  margin: auto;
  border: 2px solid #0064ff;
  color: black;
  margin-top: 25px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
    border: 2px solid #0052d1;
  }
`;

export default function Login(props: any): JSX.Element {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(['userInfo']);

  const handleId = useCallback(
    (e: any) => {
      setId(e.target.value);
    },
    [id],
  );

  const handlePwd = useCallback(
    (e: any) => {
      setPwd(e.target.value);
    },
    [pwd],
  );

  const login = async (e: any) => {
    e.preventDefault();
    const result: any = await api.login(id, pwd);
    if (result) {
      dispatch(
        updateUserInfo(
          result.data.userid,
          '',
          result.data.username,
          result.data.email,
        ),
      );
      handleCookie(result.data.userid, result.data.username, result.data.email);
      router.push('/');
    } else {
      alert('로그인 실패');
    }
  };

  const handleCookie = (userid: string, username: string, email: string) => {
    const expireDate = new Date();
    expireDate.setMinutes(expireDate.getMinutes() + 30);
    setCookie(
      'userInfo',
      {
        userid: userid,
        username: username,
        email: email,
      },
      {
        path: '/',
        expires: expireDate,
      },
    );
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
            <SigninButton onClick={login}>로그인</SigninButton>
            <SignupButton href="/signup">회원가입</SignupButton>
          </div>
        </form>
      </LoginFrame>
    </LoginMain>
  );
}
