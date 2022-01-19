import produce from "immer";
// 액션 타입 설정
// as const 를 붙여줌으로써 나중에 액션 객체 추론을 위해 action.type의 값을 추론하는 과정에서
// action.type이 string 으로 추론되지 않고 'chatting/ADD_CHATTING' 처럼 실제 문자열 값으로 추론 되도록 함
const UPDATE_QUESTION : string = "chatting/UPDATE_QUESTION" as const;

// 액션 생성 함수 설정
export const updateQuestion = (key : number, question : string, code : string, who : string) => ({
    type: UPDATE_QUESTION,
    data: {
        key: key,
        question: question,
        code: code,
        who: who
    }
});

// 액션 객체에 대한 타입 준비
type ChattingAction = ReturnType<typeof updateQuestion>


// 이 리덕스 모듈에서 관리 할 상태의 타입 선언
type QuestionState = {
    key : number,
    question: string,
    code: string,
    who: string
};

// 초기 상태 설정
const initState : QuestionState[] = []

// 리듀서 함수 설정
export default function Chatting(state : QuestionState[] = initState, action : ChattingAction) {
    
    switch(action.type){
        case UPDATE_QUESTION:
            return produce(state, draft => {
                draft.push(action.data);
            })
        default:
            return state;
        }
}
