import {
  applyMiddleware,
  createStore,
  combineReducers,
  StoreEnhancer,
} from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import User from "./User";
import Chatting from "./Chatting";

const rootReducer = combineReducers({
  Chatting,
  User,
});

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.data,
    };
    return nextState;
  }
  return rootReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

const bindMiddleware = (middleware: any): StoreEnhancer => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([]));
};

export const wrapper = createWrapper(initStore);
