import GlobalFontStyle from "../styles/font/GlobalStyle";
import { wrapper } from "/frontEnd/reducer/store";
const App = ({ Component, pageProps }: any) => {
  return (
    <>
      <GlobalFontStyle />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(App);
