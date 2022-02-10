import axios, { AxiosResponse } from "axios";

export type receiveAnswerType = {
  answer: string;
  code: string;
};

export type sendQuestionType = {
  question: string;
  code: string;
};

export type loginType = {
  isLogin: boolean;
};

const baseUrl = "http://52.231.75.227:8000";

const urls = {
  sendQuestion: `${baseUrl}/blog/`,
  receiveAnswer: `${baseUrl}/blog/`,
  chattingLog: `${baseUrl}/blog/`,
  login: `${baseUrl}/common/login/`,
  signup: `${baseUrl}/common/signup/`,
  authEmail: `${baseUrl}/common/signup/auth/email/`,
  authEmailNum: `${baseUrl}/common/signup/auth/email/comp/`,
};

export const sendQuestion = async (
  question: string,
  code: string,
  time: string
): Promise<AxiosResponse<sendQuestionType>> => {
  const result = await axios.post(urls.sendQuestion, {
    question: question,
    code: code,
    time: time,
  });

  console.log(result);

  return result;
};

export const receiveAnswer = async (): Promise<
  AxiosResponse<receiveAnswerType>
> => {
  const result = await axios.get(urls.receiveAnswer);

  console.log(result);

  return result;
};

export const chattingLog = async () => {
  const result = await axios.get(urls.chattingLog);

  console.log(result);
  return result;
};

export const login = async (id: string, pwd: string) => {
  try {
    const result = await axios.post(urls.login, {
      userid: id,
      password: pwd,
    });
    console.log(result);

    return result;
  } catch (e: any) {
    console.log(e.request);
    console.log(e.response);
  }

  return false;
};

export const signup = async (
  name: string,
  id: string,
  password: string,
  email: string
) => {
  const result = await axios.post(urls.signup, {
    name: name,
    userid: id,
    password: password,
    email: email,
  });

  console.log(result);

  return result;
};

export const authEmail = async (email: string) => {
  const result = await axios.post(urls.authEmail, {
    email: email,
  });

  console.log(result);

  return result;
};

export const authEmailNum = async (email: string, authNum: string) => {
  const result = await axios.post(urls.authEmailNum, {
    email: email,
    auth_num: authNum,
  });

  console.log(result);

  return result;
};
