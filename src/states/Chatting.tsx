
// 액션 타입 설정
// as const 를 붙여줌으로써 나중에 액션 객체 추론을 위해 action.type의 값을 추론하는 과정에서

import { type } from "os";

// action.type이 string 으로 추론되지 않고 'chatting/ADD_CHATTING' 처럼 실제 문자열 값으로 추론 되도록 함
const UPDATE_QUESTION : string = "chatting/UPDATE_QUESTION" as const;
//const DELETE_QUESTION : string = "chatting/DELETE_CHATTING" as const;
const UPDATE_CODE : string = "chatting/UPDATE_CODE" as const;
//const DELETE_CODE : string = "chatting/DELETE_CHATTING" as const;
const SEND_CHATTING : string = "chatting/SEND_CHATTING" as const;

// 액션 생성 함수 설정
export const updateQuestion = (question : string) => ({
    type: UPDATE_QUESTION,
    data: {
        value: question
    }
});
//export const deleteQuestion = () => ({type: DELETE_QUESTION});
export const updateCode = (code : string) => ({
    type: UPDATE_CODE,
    data: {
        value: code
    }
});
//export const deleteCode = () => ({type: DELETE_CODE});
export const sendChatting = (isSend : boolean) => ({
    type: SEND_CHATTING,
    data: {
        value: isSend
    }
});

// 모든 액션 객체들에 대한 타입 준비
type ChattingAction = 
    | ReturnType<typeof updateQuestion>
    | ReturnType<typeof updateCode>
    | ReturnType<typeof sendChatting>;

// 이 리덕스 모듈에서 관리 할 상태의 타입 선언
type QuestionState = {
    question: string,
    code: string,
    isSend : boolean
};

// 초기 상태 설정
const initState : QuestionState = {
    question : "",
    code : "",
    isSend : false
};

// 리듀서 함수 설정
export default function Chatting(state : QuestionState = initState, action : ChattingAction) {
    // console.log(action.data.value);
    switch(action.type){
        case UPDATE_QUESTION:
            return {
                ...state,
                question: action.data.value
            };
        case UPDATE_CODE :
            return {
                ...state,
                code: action.data.value
            };
        case SEND_CHATTING:
            return {
                ...state,
                isSend: action.data.value
            };
        default:
            return state;
        }
}
