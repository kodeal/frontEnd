import MainPage from 'pages/main';
import Head from 'next/head';
import styled from 'styled-components';

const Index = () => {
  return (
    <>
      <AppContainer>
        <Head>
          <meta charset="utf-8" />
          <link rel="icon" href="#" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
          <title>Kodeal</title>
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        </Head>
        <MainPage></MainPage>
      </AppContainer>
    </>
  );
};

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export default Index;
