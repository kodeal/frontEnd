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

const baseUrl = "http://52.231.75.227:8000"

const urls = {
    sendQuestion : `${baseUrl}/common/login`,
    receiveAnswer : "",
    login: "",
    signup: `${baseUrl}/common/signup2`
}

export const sendQuestion = async (question : string, code : string) : Promise<AxiosResponse<sendQuestionType>> => {
    const result = await axios.post(urls.sendQuestion,
        {   
            question : question,
            code : code
        }
    );

    console.log(result);
    
    
    return result;
}

export const receiveAnswer = async () : Promise<AxiosResponse<receiveAnswerType>> => {
    const result = await axios.get(urls.receiveAnswer);

        console.log(result);
    

    return result;
}

export const login = async (id: string, pwd: string) : Promise<AxiosResponse<loginType>> => {
    const result = await axios.post(urls.login,
        {
            id: id,
            password: pwd
        }
    );

        console.log(result);
    
    return result;
}

export const signup = async (name: string, id: string, password: string, email: string) => {
    const result = await axios.post(urls.signup,
        {
            name: name,
            id: id,
            password: password,
            email: email
        }
    );

        console.log(result);
    
    return result
}