import axios, { AxiosResponse } from "axios";
import * as type from "./type";

const urls = {
    sendQuestion : "",
    receiveAnswer : "",
    login : ""
}

export const sendQuestion = async (question : string, code : string) : Promise<AxiosResponse<type.sendQuestionType>> => {
    const result = await axios.post(urls.sendQuestion,
        {   
            question : question,
            code : code
        }
    );
    
    return result.data;
}

export const receiveAnswer = async () : Promise<AxiosResponse<type.receiveAnswerType>> => {
    const result = await axios.get(urls.receiveAnswer);

    return result.data;
}

export const login = async (id: string, pwd: string) : Promise<AxiosResponse<type.loginType>> => {
    const result = await axios.post(urls.login,
        {
            id: id,
            password: pwd
        }
    );

    return result.data;
}