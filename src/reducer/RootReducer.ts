import { combineReducers } from "redux";
import chatting from "./Chatting";

const rootReducer = combineReducers({
    chatting
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;