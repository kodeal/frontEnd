import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styled from 'styled-components';

const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`;

const CloseButton = styled.div``;

interface modalProps {
  code: string;
  close: any;
}

const DetailModal = (props: modalProps) => {
  return (
    <Modal>
      <SyntaxHighlighter language="python">{props.code}</SyntaxHighlighter>
    </Modal>
  );
};

export default DetailModal;
