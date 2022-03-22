import styled from "styled-components";
import Image from "next/image";
import { kodealIcon } from "public/images/index";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import Card from "components/Card";

const CardLayout = styled.div`
    width: 88%;
    height: 300px;
    margin: auto;
    background-color: #888;
    border-radius:10px;
`

const UserBallon = styled.div`
display: flex;
flex-direction: column;
text-align: right;
word-break: break-all;
align-items: flex-end;
margin-right: 10px;
margin-top: 5px;
`;

const KodealBallon = styled.div`
display: flex;
flex-direction: column;
text-align: left;
word-break: break-all;
align-items: flex-start;
margin-left: 10px;
margin-top: 5px;
`;

const KodealProfile = styled.div`
display: flex;
flex-direction: row;
gap: 8px;
`;

const KodealProfileImage = styled(Image)`
width: 30px;
height: 30px;
border-radius: 50%;
border: 1px solid #aaa;
`;

const QuestionBallon = styled.div`
background-color: #0064ff;
border-radius: 10px;
border: none;
color: white;
font-size: 17px;
font-weight: 500;
letter-spacing: -0.25px;
margin-top: 6.8px;
padding: 10px 16px;
margin-top: 5px;
max-width: 500px;
word-break: break-all;
`;

const AnswerBallon = styled.div`
background-color: #ccc;
border-radius: 10px;
border: none;
color: black;
font-size: 17px;
font-weight: 550;
letter-spacing: -0.25px;
margin-top: 6.8px;
padding: 10px 16px;
margin: 10px 0px 0px 0px;
max-width: 500px;
word-break: break-all;
`;

const ExplainTitle = styled.div`
  font-size: 50px;
  color: white;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const CardBoxLayout = styled.div`
  position: relative;
  height: fit-content;
`;

const LongExplainCard = () => {

    const [chatting, setChatting] = useState(false);

    const setCardState = () => {
        chatting ? setChatting(false) : setChatting(true);
    }

    useEffect(()=>{
        AOS.init();
    }, [])


    return(
        <>
        {chatting ? (
            <CardBoxLayout>
                            <CardLayout data-aos="fade-up" data-aos-delay="300" onMouseLeave={setCardState} style={{backgroundColor: "#aaa"}}>
            <UserBallon data-aos="fade-up" data-aos-delay="900">
                <QuestionBallon>
                    사용자가 파이썬 코드에 관한 궁금한 질문을 작성하면
                </QuestionBallon>
            </UserBallon>
            <KodealBallon data-aos="fade-up" data-aos-delay="1500">
            <KodealProfile>
        <KodealProfileImage src={kodealIcon} width={30} height={30} />
        <div
          style={{ lineHeight: "1.9", textAlign: "center", fontWeight: "600" }}
        >
          Kodeal
        </div>
      </KodealProfile>
      
        <AnswerBallon>
          Kodeal이 사용자의 질문을 알아듣고 바로 답변을 해줘요.
        </AnswerBallon>
      
            </KodealBallon>

            <UserBallon data-aos="fade-up" data-aos-delay="2100">
                <QuestionBallon>
                    지난 1주일간의 비트코인 시세를 가져오는 코드를 알려줘!
                </QuestionBallon>
            </UserBallon>
        </CardLayout>

            </CardBoxLayout>
        ) : (
            <CardBoxLayout >
                <CardLayout onMouseEnter={setCardState} style={{filter: "brightness(40%)"}}>
            </CardLayout>
            <ExplainTitle>
                    Kodeal과 어떻게 대화해야 될까요?
                </ExplainTitle>
            </CardBoxLayout>
            
        )}
    
        </>
        
    );

}

export default LongExplainCard;