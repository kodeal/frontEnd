import styled, { keyframes } from 'styled-components';
import SpeechBallon from '@components/QnApage/SpeechBallon';
import { BsFillLightbulbFill } from 'react-icons/bs';

const modalShow = keyframes`
  from {
    opacity: 0;
    margin-top: 50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;

const Layout = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 10px;
  background-color: #cdf0ff;
  position: absolute;
  right: 15vw;
  top: 6vh;
  box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
  padding: 15px;
  animation: ${modalShow} 0.3s linear forwards;
  z-index: 10;
  &::after {
    width: 30px;
    height: 30px;
    background-color: red;
  }
`;

const FlexLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  width: 100%;
  text-align: left;
  padding: 10px 0px;
`;

const ExampleLayout = styled.div`
  width: 100%;
  height: 92%;
  overflow: scroll;
  background-color: rgb(223, 223, 223);
`;

const QuestionExplain = () => {
  const questionExamples = [
    {
      question: '기본적인 문법에 관해 질문해 보세요.',
      who: 'kodeal',
      language: 'python',
    },
    {
      question: '클래스는 어떻게 만들어?',
      who: 'user',
      language: 'python',
    },
    {
      question: '간단한 구현 관련 질문도 괜찮아요!',
      who: 'kodeal',
      language: 'python',
    },
    {
      question: '1부터 100까지의 합계를 구해줘',
      who: 'user',
      language: 'python',
    },
    {
      question: '비트코인의 시세도 알아볼까요?',
      who: 'kodeal',
      language: 'python',
    },
    {
      question: '어제 비트코인의 시세를 알려주는 코드를 작성해줘',
      who: 'user',
      language: 'python',
    },
  ];

  const speechBallonArr = questionExamples.map((question, index) => (
    <SpeechBallon
      key={index}
      time={''}
      question={question.question}
      code={question.question}
      who={question.who}
      language={question.language}
    />
  ));
  return (
    <Layout>
      <FlexLayout>
        <BsFillLightbulbFill size={25} color="gold" />
        <Title>질문은 이렇게 입력해 보세요!</Title>
      </FlexLayout>
      <ExampleLayout>{speechBallonArr}</ExampleLayout>
    </Layout>
  );
};

export default QuestionExplain;
