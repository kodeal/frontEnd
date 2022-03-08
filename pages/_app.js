import GlobalFontStyle from "/frontEnd/src/font/GlobalStyle";
import {wrapper} from "/frontEnd/src/reducer/index";
const App = ({ Component, pageProps }) => {
  return (
    <>
    <GlobalFontStyle/>
    <Component {...pageProps}/>
    </>
  );
};


export default wrapper.withRedux(App);
