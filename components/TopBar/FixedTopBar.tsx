import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';

const TopBar = styled.div`
  width: 100%;
  height: 5vh;
  background-color: #555;
  display: flex;
  justify-content: space-between;
  text-align: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
`;

const TopBarTitle = styled.a`
  width: 10%;
  font-size: 2rem;
  margin-left: 30px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  line-height: 4.7vh;
  cursor: pointer;
  color: white;
`;

const LoginButton = styled.a`
  width: 150px;
  background-color: #0064ff;
  border-radius: 10px;
  font-size: 1.55rem;
  margin: 6px 50px 6px 5px;
  text-decoration: none;
  line-height: 3.7vh;
  cursor: pointer;
  color: white;
  &:hover {
    background-color: #0052d1;
  }
`;

const UserName = styled.div`
  color: black;
  font-weight: 500;
  width: 200px;
  font-size: 22px;
  line-height: 3vh;
  text-align: center;
  margin: 8px 20px 8px 0px;
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
`;

const FixedTopBar = (): JSX.Element => {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(['userInfo']);

  const gotoMypage = () => {
    router.push(`/profile?userid=${cookies.userInfo.userid}`);
  };

  return (
    <TopBar>
      <TopBarTitle href="/">Kodeal</TopBarTitle>
      {cookies.userInfo ? (
        <UserName onClick={gotoMypage}>{cookies.userInfo.username} 님</UserName>
      ) : (
        <LoginButton href="/signin">Sign in</LoginButton>
      )}
    </TopBar>
  );
};

export default FixedTopBar;
