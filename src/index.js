import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "reducer/RootReducer";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import logger from "redux-logger";
import { CookiesProvider } from "react-cookie";

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <BrowserRouter>
    <CookiesProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CookiesProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
