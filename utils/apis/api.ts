import axios from 'axios';

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

const baseUrl = 'https://kodeal.koreacentral.cloudapp.azure.com:8001';

const urls = {
  sendQuestion: `${baseUrl}/blog/`,
  chattingLog: `${baseUrl}/blog/?userid=`,
  login: `${baseUrl}/common/login/`,
  signup: `${baseUrl}/common/signup/`,
  authEmail: `${baseUrl}/common/signup/auth/email/`,
  authEmailNum: `${baseUrl}/common/signup/auth/email/comp/`,
  sendProfileImage: `${baseUrl}/mypage/profile/`,
  getProfile: `${baseUrl}/mypage/`,
};

export const sendQuestion = async (
  userid: string,
  question: string,
  code: string,
  time: string,
  language: string,
) => {
  const result = await axios.post(urls.sendQuestion, {
    userid: userid,
    question: question,
    code: code,
    time: time,
    language: language,
  });

  console.log(result);

  return result;
};

export const chattingLog = async (userid: string) => {
  const result = await axios.get(`${urls.chattingLog}${userid}`);

  console.log(result);
  return result;
};

export const login = async (id: string, pwd: string) => {
  try {
    const result = await axios.post(urls.login, {
      userid: id,
      password: pwd,
      keep_login: 'True',
    });
    console.log(result);

    return result;
  } catch (e: any) {
    console.log(e.request);
  }

  return false;
};

export const signup = async (
  username: string,
  id: string,
  password: string,
  email: string,
) => {
  console.log(username);
  const result = await axios.post(urls.signup, {
    username: username,
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

export const sendProfileImage = async (
  img: FormData,
  img_name: string,
  userid: string,
) => {
  const result = await axios.post(urls.sendProfileImage, {
    img: img,
    img_name: img_name,
    userid: userid,
  });

  console.log(result);

  return result;
};

export const getProfile = async (userid: string) => {
  const result = await axios.get(urls.getProfile + `?userid=${userid}`);
  console.log(result);

  return result;
};
