import styled from 'styled-components';

const CardBox = styled.div`
  border-radius: 10px;
  text-align: center;
  width: 800px;
  position: absolute;
  top: 15%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const CardTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: white;
  text-align: left;
  width: 90%;
  margin: 5px auto 40px auto;
  z-index: 1;
`;

const CardText = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: white;
  text-align: left;
  width: 90%;
  z-index: 1;
  margin: 5px auto;
`;

const PageButton = styled.div`
  width: 250px;
  height: 50px;
  background-color: #e95c63;
  color: white;
  border: none;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  margin-top: 40px;
  cursor: pointer;
  font-size: 20px;
  margin-left: 37px;
`;

const PageLink = styled.a`
  text-decoration: none;
  color: white;
`;

interface cardProps {
  card: number;
}

const Card = (props: cardProps): JSX.Element => {
  const card: number = props.card;
  return card === 1 ? (
    <CardBox data-aos="fade-up">
      <CardTitle>Codex는 OpenAI에서 만든 인공지능 모델이에요.</CardTitle>
      <CardText>
        <pre>{`기존에 있던 자연어 처리 모델인 GPT-3에 코드를 학습하여 만든 모델로써\n코드 관련 질문에 특화되어 있어요.`}</pre>
        <br />더 많은 내용은 Codex 공식 사이트에서 확인하실 수 있어요.
      </CardText>
      <PageButton>
        <PageLink href="https://openai.com/blog/openai-codex/">
          {' '}
          공식 사이트로 이동
        </PageLink>
      </PageButton>
    </CardBox>
  ) : (
    <CardBox data-aos="fade-up">
      <CardTitle>Kodeal은 Codex API를 사용하기 쉽게 만들어졌어요.</CardTitle>
      <CardText>
        아직 완벽한 친구가 아니라 가끔 다른 답변을 줄 수도 있어요.
      </CardText>
      <CardText>또한 지금은 파이썬 언어만 지원하고 있어요.</CardText>
      <p />
      <CardText>앞으로 점점 발전하는 Kodeal이 되도록 할게요.</CardText>
    </CardBox>
  );
};

export default Card;
