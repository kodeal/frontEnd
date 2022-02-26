import styled from "styled-components";
import { Link } from "react-router-dom";
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
  background-color: #ff5e5c;
  border-radius: 12px;
  font-size: 1.55rem;
  color: white;
  margin: 5px 30px 5px 5px;
  text-decoration: none;
  line-height: 3.8vh;
  cursor: pointer;

  &:hover {
    background-color: #cc4b49;
  }
`;

const UserName = styled.div`
  color: black;
  font-weight: 600;
  width: 200px;
  font-size: 16px;
  line-height: 30px;
  background-color: #dfdfdf;
  text-align: center;
  border-radius: 8px;
  margin: 8px;
`;

export default function FixedTopBar(): JSX.Element {
  const [cookies, setCookie, removeCookie] = useCookies(["userInfo"]);

  return (
    <TopBar>
      <TopBarTitle to="/">Kodeal</TopBarTitle>
      {cookies.userInfo ? (
        <UserName>{cookies.userInfo.username} 님</UserName>
      ) : (
        <LoginButton to="/login">Sign in</LoginButton>
      )}
    </TopBar>
  );
}
