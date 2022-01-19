import SpeechBallonContainer from "containers/SpeechBallonContainer";
import styled, { StyledComponent } from "styled-components";
import {useEffect, useState} from 'react'
import { receiveAnswer } from "apis/api";
import { useDispatch } from "react-redux";
import { updateQuestion } from "reducer/Chatting";

const Box : StyledComponent<"div", any, {}, never> = styled.div`
    width : 100%;
    background-color: rgb(240, 240, 240);
    border: 1px solid;
    border-radius: 8px;
    margin: 0.6rem;
    overflow-y: scroll;
    margin-top: 4rem;
    display: flex;
    justify-content: right;
    align-items: flex-start;
`;

export default function ChatBox() : JSX.Element{
    
    const [isSending, setIsSending] = useState(false)
    const dispatch = useDispatch()

    useEffect( () => {
        (async () => {
            await getAnswer()
        })();
    }, [isSending])


    const checkSending = () => {

    }

    const getAnswer = async () => {
        const result = await receiveAnswer()
        //dispatch(updateQuestion(key, result.data.answer, result.data.code, "kodeal"));
    }

    return(
        <Box>
            {SpeechBallonContainer(checkSending)}
        </Box>
    );
}
