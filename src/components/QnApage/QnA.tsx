import styled, {StyledComponent} from "styled-components";
import FixedTopBar from "components/TopBar/FixedTopBar";
import ChatBox from "./ChatBox";
import ChatInputWindow from "./ChatInput";
import {useEffect, useState} from 'react'
import { receiveAnswer } from "apis/api";
import { useDispatch } from "react-redux";
import { updateQuestion } from "reducer/Chatting";

const Main : StyledComponent<"div", any, {}, never> = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    opacity: 0.8;
    position: absolute;
 `;

 const DivBox : StyledComponent<"div", any, {}, never> = styled.div`
    display: flex;
    height: 90%;
 `;

 export const getTime = () : string => {
    const today = new Date();

    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);

    const dateString = year + '-' + month + '-' + day; 
    const hours = ('0' + today.getHours()).slice(-2); 
    const minutes = ('0' + today.getMinutes()).slice(-2);
    const seconds = ('0' + today.getSeconds()).slice(-2); 
    const timeString = hours + ':' + minutes + ':' + seconds;
    
    return `${dateString} ${timeString}`
}

export default function QnA(): JSX.Element {
    const [isSending, setIsSending] = useState(false);
    const dispatch = useDispatch();

    useEffect( () => {
        (async () => {
            await getAnswer();
        })();
    }, [isSending])


    const getAnswer = async () => {
        const result = await receiveAnswer();
        const time = getTime();
        dispatch(updateQuestion(time, result.data.answer, result.data.code, "kodeal"));
    }
    
    return(
        <Main>
            <FixedTopBar/>
            <DivBox>
                <ChatBox/>
                <ChatInputWindow setIsSending={setIsSending}/>
            </DivBox>
        </Main>
    );
}