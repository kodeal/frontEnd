import { combineReducers } from "redux";
import chatting from "./Chatting";
import User from "./User";

const rootReducer = combineReducers({
  chatting,
  User,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
