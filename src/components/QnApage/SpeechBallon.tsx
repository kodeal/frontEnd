import styled, {StyledComponent} from "styled-components";

const Ballon :StyledComponent<"div", any, {}, never> = styled.div`
    background-color: white;
    border: #7689fd solid 1px;
    border-radius: 10px;
    color: black;
    font-size: 17px;
    font-weight: 550;
    height: auto;
    letter-spacing: -0.25px;
    margin-top: 6.8px;
    padding: 5px 11px;
    width: fit-content;
    z-index: 100;
`;

type chattingType = {
    question: string,
    code: string,
    isSend: boolean
};

export default function SpeechBallon (props : chattingType) :JSX.Element {
    console.log(`props.question:${props.question}`);
    return(
        <Ballon>{props.question}</Ballon>
    );
}