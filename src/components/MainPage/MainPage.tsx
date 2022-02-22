import styled, { StyledComponent } from "styled-components";
import { useNavigate } from "react-router-dom";
import FixedTopBar from "components/TopBar/FixedTopBar";
import { explain1, codex, mainLogo } from "images/index";
import { useSelector } from "react-redux";
import { RootState } from "reducer/RootReducer";
import { fadeIn } from "animations/animation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = styled.div`
  width: 100%;
  background-color: #333;
`;
const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #333;
  font-size: 50px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
`;

const StartButton = styled.div`
  background-color: slateblue;
  width: 200px;
  height: 50px;
  border-radius: 20px;
  font-size: 2.2rem;
  color: white;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
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
  animation: ${fadeIn} linear 1s;
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
  animation: ${fadeIn} linear 1s;
`;

const ExplainLayout = styled.div`
  width: 100%;
  height: 900px;
  margin: auto;
  padding: 50px 0px 50px 0px;
  display: flex;
  flex-direction: column;
  background-color: #333;
  position: relative;
`;

const ExplainFlexBox = styled.div`
  width: 90%;
  height: 800px;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

const ExplainTitle = styled.p`
  font-size: 40px;
  color: white;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 30%;
  left: 40%;
  z-index: 1;
`;

const ExplainText = styled.p`
  font-size: 25px;
  color: white;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 30%;
  z-index: 1;
`;

const MainImage = styled.img`
  width: 90%;
  height: 800px;
  margin: auto;
  border-radius: 10px;
  filter: brightness(50%);
`;

const CodexImage = styled.img`
  width: 800px;
  height: 400px;
  border-radius: 10px;
`;

type userState = {
  id: string;
  password: string;
  name: string;
  email: string;
};

export default function MainPage(): JSX.Element {
  const user: userState = useSelector((state: RootState) => state.User);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  const onStart = () => {
    if (!user.id) {
      alert("로그인 후 이용해주세요.");
    } else {
      navigate("/QnA");
    }
  };

  return (
    <div>
      <Main>
        <FixedTopBar />
        <MainBox data-aos="fade-up">
          <Title>Kodeal</Title>
          <IntroText>
            코딩 입문자를 위한 코딩 QnA 서비스
            <br />
            다양한 질문과 답변을 통해{" "}
            <span style={{ fontSize: "25px" }}>성장</span>을 느껴보세요.
          </IntroText>
          <hr style={{ width: "400px" }} />
          <StartButton onClick={onStart}>START</StartButton>
        </MainBox>
        <CodingLogo src={mainLogo} />
      </Main>
      <ExplainLayout>
        <ExplainTitle data-aos="fade-up" data-aos-delay="300">
          코딩에 입문하시나요?{" "}
          <hr style={{ width: "400px", marginTop: "20px" }} />
        </ExplainTitle>
        <ExplainText data-aos="fade-up" data-aos-delay="500">
          Kodeal은 당신의 코딩 실력 향상을 도와줄 인공지능 QnA 서비스에요.
          <br />
          <br />
          Kodeal에게 질문하고 답변을 바로 받아보세요.
        </ExplainText>
        <MainImage src={explain1} data-aos="fade-up" />
      </ExplainLayout>
      <ExplainLayout>
        <ExplainFlexBox>
          <div data-aos="fade-up" data-aos-delay="300">
            <CodexImage src={codex} />
            <p
              style={{
                fontSize: "120px",
                textAlign: "center",
                color: "#66f6f6",
              }}
            >
              &
            </p>
            <div
              style={{
                fontSize: "160px",
                color: "white",
                textAlign: "center",
                backgroundColor: "#222",
                borderRadius: "10px",
              }}
            >
              Kodeal
            </div>
          </div>
          <IntroText
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              backgroundColor: "#666",
              borderRadius: "10px",
              padding: "10px",
            }}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Kodeal은 Codex api를 활용하여 만들어졌어요.
          </IntroText>
        </ExplainFlexBox>
      </ExplainLayout>
    </div>
  );
}
