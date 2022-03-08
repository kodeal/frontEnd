import { applyMiddleware, createStore } from "redux";
import reducer from "./RootReducer";
import {createWrapper} from "next-redux-wrapper";


// const bindMiddleware = (middleware: any) => {

//     return applyMiddleware(...middleware);
// };
  
const initStore = () => {
    return createStore(
      reducer,
      // bindMiddleware([])
    );
};

  
export const wrapper = createWrapper(initStore);