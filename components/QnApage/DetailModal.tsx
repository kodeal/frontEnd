import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styled from 'styled-components';

interface modalProps {
  code: string;
  close: any;
  modal: boolean;
}

interface modalCompProps {
  modal: boolean;
}

const Modal = styled.div<modalCompProps>`
  display: ${(props) => (props.modal ? 'none' : 'none')}
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  opacity: 0.3;
  background-color: rgba(0, 0, 0, 0.6);
`;

const CloseButton = styled.div`
  width: 60px;
  margin-left: 0;
  color: white;
  cursor: pointer;
  font-size: 40px;
  padding: 15px;
`;

const CodeDetail = styled.div`
  width: 50vw;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  border-radius: 2px solid black;
  z-index: 11;
`;

const DetailModal = (props: modalProps) => {
  return (
    <Modal modal={props.modal}>
      <CloseButton onClick={props.close}>X</CloseButton>
      <CodeDetail>
        <SyntaxHighlighter language="python">{props.code}</SyntaxHighlighter>
      </CodeDetail>
    </Modal>
  );
};

export default DetailModal;
