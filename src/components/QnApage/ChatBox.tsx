import styled, { StyledComponent } from "styled-components";

const Box : StyledComponent<"div", any, {}, never> = styled.div`
    width : 100%;
    background-color: rgb(220, 200, 220);
    border: 1px solid;
    border-radius: 8px;
    margin: 0.6rem;
`;

export default function ChatBox() : JSX.Element{
    return(
        <Box></Box>
    );
}