import Image from 'next/image';
import styled from 'styled-components';
import { kodealIcon } from 'public/images/index';
import { fadeIn } from 'utils/animations/animation';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useState } from 'react';
import DetailModal from './DetailModal';

const UserBallon = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  word-break: break-all;
  align-items: flex-end;
  margin-right: 10px;
  margin-top: 5px;
  animation: ${fadeIn} linear 0.2s;
  @media only screen and (max-width: 1200px) {
    margin-right: 5px;
  }
`;

const KodealBallon = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  word-break: break-all;
  align-items: flex-start;
  margin-left: 10px;
  margin-top: 5px;
  animation: ${fadeIn} linear 0.2s;
`;

const KodealProfile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const KodealProfileImage = styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #aaa;
`;

const QuestionBallon = styled.div`
  background-color: #0064ff;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.25px;
  margin-top: 6.8px;
  padding: 10px 16px;
  margin-top: 5px;
  max-width: 500px;
  word-break: break-all;
`;

const AnswerBallon = styled.div`
  background-color: #ccc;
  border-radius: 10px;
  border: none;
  color: black;
  font-size: 17px;
  font-weight: 550;
  letter-spacing: -0.25px;
  margin-top: 6.8px;
  padding: 10px 16px;
  margin: 10px 0px 0px 0px;
  max-width: 500px;
  word-break: break-all;
`;

const SeeDetail = styled.div`
  width: 70px;
  height: 30px;
  margin-left: 0;
  color: black;
  text-align: center;
  line-height: 30px;
  border: 2px solid purple;
  margin-top: 7px;
  padding: 3px;
  cursor: pointer;
`;

type chattingType = {
  time: string;
  question: string;
  code: string;
  who: string;
};

export default function SpeechBallon(props: chattingType): any {
  const [modal, setModal] = useState(false);

  const openDetailModal = () => {
    setModal(true);
  };

  const closeDetailModal = () => {
    console.log('close!!!');
    setModal(false);
  };

  return props.who === 'user' ? (
    <UserBallon>
      <QuestionBallon>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{props.question}</pre>
      </QuestionBallon>
    </UserBallon>
  ) : (
    <KodealBallon>
      <KodealProfile>
        <KodealProfileImage src={kodealIcon} width={30} height={30} />
        <div
          style={{ lineHeight: '1.9', textAlign: 'center', fontWeight: '600' }}
        >
          Kodeal
        </div>
      </KodealProfile>
      {props?.code?.length > 0 ? (
        <>
          <AnswerBallon>
            <SyntaxHighlighter language="python">
              {props.code}
            </SyntaxHighlighter>
          </AnswerBallon>
          <>
            <SeeDetail onClick={openDetailModal}>전체보기</SeeDetail>
          </>
        </>
      ) : null}
      {modal ? (
        <DetailModal
          code={props.code}
          close={closeDetailModal}
          modal={modal}
        ></DetailModal>
      ) : null}
    </KodealBallon>
  );
}
