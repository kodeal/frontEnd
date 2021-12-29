import styled, {StyledComponent} from "styled-components";

const Ballon :StyledComponent<"div", any, {}, never> = styled.div`
    background-color: #eef3fd;
    border: #7689fd solid 1px;
    border-radius: 5px;
    color: #505bf0;
    font-size: 12px;
    font-weight: 500;
    height: auto;
    letter-spacing: -0.25px;
    margin-top: 6.8px;
    padding: 5px 11px;
    position: relative;
    width: fit-content;
    z-index: 100;
    &:after {
        border-color: #eef3fd transparent;
        border-style: solid;
        border-width: 0 6px 8px 6.5px;
        content: '';
        display: block;
        left: 75px;
        position: absolute;
        top: -7px;
        width: 0;
        z-index: 1;
      }
    &:before {
        border-color: #7689fd transparent;
        border-style: solid;
        border-width: 0 6px 8px 6.5px;
        content: '';
        display: block;
        left: 75px;
        position: absolute;
        top: -8px;
        width: 0;
        z-index: 0;
      }
`;

export default function SpeechBallon () :JSX.Element {
    return(
        <Ballon/>
    );
}