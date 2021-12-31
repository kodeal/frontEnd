import {useSelector} from "react-redux";
import {RootState} from "../states/RootReducer";
import SpeechBallon from "components/QnApage/SpeechBallon";

type QuestionState = {
    key : number,
    question: string,
    code: string,
    who: string
};

export default function SpeechBallonContainer(){
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