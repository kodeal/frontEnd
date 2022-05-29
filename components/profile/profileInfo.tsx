import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;

  height: 100%;
`;

const InfoLayout = styled.div`
  width: 90%;
  padding: 15px 8px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  border-bottom: 1px solid rgb(210, 210, 210);
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
`;

const Info = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #444;
`;

const ProfileInfo = () => {
  return (
    <Layout>
      <InfoLayout>
        <Title>이름</Title>
        <Info>김정현</Info>
      </InfoLayout>
      <InfoLayout>
        <Title>이메일</Title>
        <Info>kymkjh2002@gmail.com</Info>
      </InfoLayout>
      <InfoLayout>
        <Title>질문 횟수</Title>
        <Info>12</Info>
      </InfoLayout>
    </Layout>
  );
};

export default ProfileInfo;
