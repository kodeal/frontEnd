import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styled, { keyframes } from 'styled-components';

interface modalProps {
  code: string;
  close: any;
  modal: boolean;
}

const modalShow = keyframes`
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;

const Modal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
  animation: ${modalShow} 0.3s linear;
`;

const CloseButton = styled.div`
  width: 50px;
  height: 50px;
  line-height: 40px;
  margin-left: 0;
  margin-bottom: 10px;
  color: white;
  cursor: pointer;
  font-size: 40px;
  padding: 2px;
  font-weight: bold;
  text-align: center;
  background-color: #e95c63;
  border-radius: 50%;
`;

const CodeDetail = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: left;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: #f5f2f0;
  z-index: 10000;
  text-align: left;
`;

const DetailModal = (props: modalProps) => {
  return (
    <Modal>
      <CloseButton onClick={props.close}>x</CloseButton>
      <CodeDetail>
        <SyntaxHighlighter language="python">{props.code}</SyntaxHighlighter>
      </CodeDetail>
    </Modal>
  );
};

export default DetailModal;
