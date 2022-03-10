import styled from "styled-components";
import Link from "next/link";
import { useCookies } from "react-cookie";

const TopBar = styled.div`
  width: 100%;
  height: 5vh;
  background-color: #222;
  display: flex;
  justify-content: space-between;
  text-align: center;
  position: fixed;
  top: 0;
  right: 0;
  border-radius: 5px;
`;

const TopBarTitle = styled(Link)`
  width: 10%;
  color: white;
  font-size: 2rem;
  margin-left: 30px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  line-height: 4.7vh;
  cursor: pointer;
`;

const LoginButton = styled(Link)`
  width: 150px;
  background-color: #0064ff;
  border-radius: 10px;
  font-size: 1.55rem;
  color: white;
  margin: 6px 50px 6px 5px;
  text-decoration: none;
  line-height: 3.7vh;
  cursor: pointer;

  &:hover {
    background-color: #0052d1;
  }
`;

const UserName = styled.div`
  color: black;
  font-weight: 600;
  width: 200px;
  font-size: 22px;
  line-height: 3vh;
  text-align: center;
  margin: 8px 20px 8px 0px;
  color: white;
`;

const FixedTopBar = (): JSX.Element => {
  const [cookies, setCookie, removeCookie] = useCookies(["userInfo"]);

  return (
    <TopBar>
      <TopBarTitle href="/">Kodeal</TopBarTitle>
      {cookies.userInfo ? (
        <UserName>{cookies.userInfo.username} 님</UserName>
      ) : (
        <LoginButton href="/login/signin">Sign in</LoginButton>
      )}
    </TopBar>
  );
};

export default FixedTopBar;
