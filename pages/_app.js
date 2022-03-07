import { GlobalFontStyle } from "font/GlobalStyle";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps}>
      <GlobalFontStyle />
    </Component>
  );
};

export default MyApp;
