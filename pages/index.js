import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "/frontEnd/src/reducer/RootReducer";
import App from "../src/App";
import reportWebVitals from "../src/reportWebVitals";
import logger from "redux-logger";
import { CookiesProvider } from "react-cookie";
import Head from "next/head";

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
    </AppContainer>
    </>
  )
}

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`