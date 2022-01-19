import {useSelector} from "react-redux";
import {RootState} from "../reducer/RootReducer";
import SpeechBallon from "components/QnApage/SpeechBallon";

type QuestionState = {
    key : number,
    question: string,
    code: string,
    who: string
};

const SpeechBallonContainer = (props: any) => {
    const chatArr : QuestionState[] = useSelector((state : RootState) => state.chatting);
    const chatArrLength : number = chatArr.length;
    const speechBallonArr :JSX.Element[] = chatArr.map(chat => 
        <SpeechBallon
        key={chat.key}
        question={chat.question}
        code={chat.code}
        who={chat.who}
        />
    );
    
    return(chatArrLength > 0 ? speechBallonArr : null);
}

export default SpeechBallonContainer