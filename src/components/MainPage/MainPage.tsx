import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FixedTopBar from "components/TopBar/FixedTopBar";
import { explain1, codex, kodealIcon } from "images/index";
import { fadeIn } from "animations/animation";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCookies } from "react-cookie";
import Card from "./Card";
import { coding } from "videos/index";

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #333;
  font-size: 50px;
  display: flex;
  justify-content: flex-end;
  z-index: -1;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 160px;
  margin-bottom: 2vw;
`;

const StartButton = styled.div`
  background-color: #0064ff;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 2.2rem;
  color: white;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #0052d1;
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
  text-align: center;
  margin-right: 8vw;
`;
const IntroText = styled.div`
  color: white;
  font-weight: 500;
  font-size: 18px;
`;

const CodingLogo = styled.img`
  width: 480px;
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
  margin: auto;
  justify-content: space-around;
  gap: 30px;
`;

const Explain1Title = styled.p`
  font-size: 40px;
  color: white;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 30%;
  left: 40%;
  z-index: 1;
`;

const Explain1Text = styled.p`
  font-size: 25px;
  color: white;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 30%;
  z-index: 1;
`;

const Explain1Image = styled.img`
  width: 90%;
  height: 800px;
  margin: auto;
  border-radius: 10px;
  filter: brightness(40%);
`;

const Explain2Image = styled.img`
  width: 800px;
  height: 400px;
  border-radius: 10px;
`;

const CardBox = styled.div`
  position: relative;
  font-size: 80px;
  color: white;
  border-radius: 10px;
  text-align: center;
  background-color: #222;
  height: 400px;
  width: 800px;
`;

const Video = styled.video`
  position: absolute;
  width: 100vw;
  top: 5%;
`;

type userState = {
  id: string;
  password: string;
  name: string;
  email: string;
};

export default function MainPage(): JSX.Element {
  const [cookies, setCookie, removeCookie] = useCookies(["userInfo"]);
  const [cardHover, setCardHover] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  const onStart = () => {
    if (!cookies.userInfo) {
      alert("로그인 후 이용해주세요.");
    } else {
      navigate("/QnA");
    }
  };

  const handleCardHover = (e: any, card: number): void => {
    setCardHover(card);
  };

  return (
    <div>
      <Main>
        <FixedTopBar />
        <Video autoPlay muted loop>
          <source src={coding} type="video/mp4" />
        </Video>
        <MainBox data-aos="fade-up">
          <Title>Kodeal</Title>
          <IntroText style={{ fontSize: "26px" }}>
            코딩 입문자를 위한 코딩 QnA 서비스
            <br />
            다양한 질문과 답변을 통해{" "}
            <span style={{ fontSize: "25px" }}>성장</span>을 느껴보세요.
          </IntroText>
          <hr style={{ width: "550px" }} />
          <StartButton onClick={onStart}>START</StartButton>
        </MainBox>
      </Main>
      <ExplainLayout>
        <Explain1Title data-aos="fade-up" data-aos-delay="300">
          코딩에 입문하시나요?{" "}
          <hr style={{ width: "400px", marginTop: "20px" }} />
        </Explain1Title>
        <Explain1Text data-aos="fade-up" data-aos-delay="600">
          Kodeal은 당신의 코딩 실력 향상을 도와줄 인공지능 QnA 서비스에요.
          <br />
          <br />
          Kodeal에게 질문하고 답변을 바로 받아보세요.
        </Explain1Text>
        <Explain1Image src={explain1} data-aos="fade-up" />
      </ExplainLayout>
      <ExplainLayout>
        <IntroText
          style={{
            width: "90%",
            margin: "0px auto 20px auto",
            fontSize: "40px",
            fontWeight: "600",
          }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Kodeal은 Codex API를 활용해 만들어졌어요.
        </IntroText>
        <IntroText
          style={{
            width: "90%",
            margin: "0px auto 50px auto",
            fontWeight: "500",
          }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          서비스에 대해 좀 더 알고 싶다면 아래 카드를 확인해보세요.
        </IntroText>
        <ExplainFlexBox>
          {cardHover === 1 ? (
            <CardBox
              style={{ filter: "brightness(40%)" }}
              onMouseLeave={(e) => {
                handleCardHover(e, 0);
              }}
            >
              <Explain2Image src={codex} />
              <Card card={1}></Card>
            </CardBox>
          ) : (
            <CardBox
              onMouseEnter={(e) => {
                handleCardHover(e, 1);
              }}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Explain2Image src={codex} />
            </CardBox>
          )}

          {cardHover === 2 ? (
            <CardBox
              style={{ filter: "brightness(40%)" }}
              onMouseLeave={(e) => {
                handleCardHover(e, 0);
              }}
            >
              <Explain2Image
                style={{
                  width: "400px",
                  height: "400px",
                }}
                src={kodealIcon}
              />
              <Card card={2}></Card>
            </CardBox>
          ) : (
            <CardBox
              onMouseEnter={(e) => {
                handleCardHover(e, 2);
              }}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Explain2Image
                style={{
                  width: "400px",
                  height: "400px",
                }}
                src={kodealIcon}
              />
            </CardBox>
          )}
        </ExplainFlexBox>
      </ExplainLayout>
    </div>
  );
}
