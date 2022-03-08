import GlobalFontStyle from "../public/font/GlobalStyle";
import { wrapper } from "/frontEnd/src/reducer/store";
const App = ({ Component, pageProps }: any) => {
  return (
    <>
      <GlobalFontStyle />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(App);
