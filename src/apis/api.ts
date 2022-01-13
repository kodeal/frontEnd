import axios, { AxiosResponse } from "axios";

export type receiveAnswerType = {
    answer : string,
    code : string
}

export type sendQuestionType = {
    question : string,
    code : string
}

export type loginType = {
    isLogin : boolean
}


const urls = {
    sendQuestion : "",
    receiveAnswer : "",
    login : ""
}

export const sendQuestion = async (question : string, code : string) : Promise<AxiosResponse<sendQuestionType>> => {
    const result = await axios.post(urls.sendQuestion,
        {   
            question : question,
            code : code
        }
    );
    
    return result.data;
}

export const receiveAnswer = async () : Promise<AxiosResponse<receiveAnswerType>> => {
    const result = await axios.get(urls.receiveAnswer);

    return result.data;
}

export const login = async (id: string, pwd: string) : Promise<AxiosResponse<loginType>> => {
    const result = await axios.post(urls.login,
        {
            id: id,
            password: pwd
        }
    );

    return result.data;
}