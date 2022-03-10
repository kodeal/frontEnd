import GlobalFontStyle from "styles/font/GlobalStyle";
import { wrapper } from "reducer/store";
const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalFontStyle />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(App);
