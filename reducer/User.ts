import produce from 'immer';
// 액션 타입 설정
// as const 를 붙여줌으로써 나중에 액션 객체 추론을 위해 action.type의 값을 추론하는 과정에서
// action.type이 string 으로 추론되지 않고 'chatting/ADD_CHATTING' 처럼 실제 문자열 값으로 추론 되도록 함
const UPDATE_USERINFO: string = 'user/UPDATE_USERINFO' as const;

// 액션 생성 함수 설정
export const updateUserInfo = (
  id: string,
  password: string,
  name: string,
  email: string,
) => ({
  type: UPDATE_USERINFO,
  data: {
    id: id,
    password: password,
    name: name,
    email: email,
  },
});

// 액션 객체에 대한 타입 준비
type UserInfoAction = ReturnType<typeof updateUserInfo>;

// 이 리덕스 모듈에서 관리 할 상태의 타입 선언
type userState = {
  id: string;
  password: string;
  name: string;
  email: string;
};

// 초기 상태 설정
const initState: userState = {
  id: '',
  password: '',
  name: '',
  email: '',
};

// 리듀서 함수 설정
export default function Chatting(
  state: userState = initState,
  action: UserInfoAction,
) {
  switch (action.type) {
    case UPDATE_USERINFO:
      return produce(state, (draft) => (draft = action.data));
    default:
      return state;
  }
}
