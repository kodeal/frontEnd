import styled, { StyledComponent } from "styled-components";
import { Link } from "react-router-dom";
import FixedTopBar from "components/TopBar/FixedTopBar";
import { mainLogo } from "images/index";
const Main: StyledComponent<"div", any, {}, never> = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  font-size: 50px;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  text-align: center;
  position: absolute;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
`;

const StartButton = styled(Link)`
  background-color: slateblue;
  width: 200px;
  height: 50px;
  border-radius: 20px;
  font-size: 2.2rem;
  color: white;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: #887db1;
    color: #fafafa;
  }
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const IntroText = styled.div`
  color: white;
  font-weight: 500;
  font-size: 18px;
`;

const CodingLogo = styled.img`
  width: 640px;
  height: 480px;
  display: flex;
  align-self: center;
  justify-content: center;
  margin-left: 300px;
`;

export default function MainPage(): JSX.Element {
  return (
    <Main>
      <FixedTopBar />
      <MainBox>
        <Title>Kodeal</Title>
        <IntroText>
          코딩 입문자를 위한 코딩 QnA 서비스
          <br />
          다양한 질문과 답변을 통해{" "}
          <span style={{ fontSize: "25px" }}>성장</span>을 느껴보세요.
        </IntroText>
        <hr style={{ width: "400px" }} />
        <StartButton to="/QnA">START</StartButton>
      </MainBox>
      <CodingLogo src={mainLogo} />
    </Main>
  );
}
