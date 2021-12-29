import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../states/RootReducer";


export default function SpeechBallonContainer(){
    const {question, code, isSend} = useSelector((state : RootState) => state.chatting);
    const dispatch = useDispatch();

}