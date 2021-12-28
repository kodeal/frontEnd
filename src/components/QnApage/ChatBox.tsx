import styled from "styled-components";

const Box = styled.div`
    width : 95%;
    height: 70vh;
    background-color: gray;
    border: 1px solid;
    border-radius: 10px;
    margin: 0 auto;
`;

export default function ChatBox() : JSX.Element{
    return(
        <Box></Box>
    );
}