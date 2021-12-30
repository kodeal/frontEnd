import {useSelector} from "react-redux";
import {RootState} from "../states/RootReducer";
import SpeechBallon from "components/QnApage/SpeechBallon";

export default function SpeechBallonContainer() : JSX.Element{
    const {question, code, isSend} = useSelector((state : RootState) => state.chatting);
    console.log(`SpeechBallonContainer : ${question}`);
    return(
        <SpeechBallon
        question={question}
        code={code}
        isSend={isSend}
        />

    );
}