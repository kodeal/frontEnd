import styled from 'styled-components';
import moment from 'moment';

import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import { contributionDay } from '@utils/apis/api';
import { useCookies } from 'react-cookie';

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const FlexLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const DetailLayout = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
`;

const DateTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const QuestionsLayout = styled.div`
  width: 100%;
  overflow: scroll;
  background-color: rgb(223, 223, 223);
  padding: 20px;
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

const Contribution = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['userInfo']);
  const [date, setDate] = useState(null);
  const [questions, setQuestions] = useState([]);

  const getContribution = async (date: any) => {
    const [year, month, day] = moment(date).format('YYYY MM DD').split(' ');
    console.log(year, month, day);
    const result = await contributionDay(
      cookies.userInfo.userid,
      year,
      month,
      day,
    );

    const dayQuestions = [];
    for (let question in result) {
      dayQuestions.push([question, result[question]]);
    }
    setQuestions([...dayQuestions]);
  };
  useEffect(() => {
    const today = moment();
    setDate(today.format('YYYY년 MM월 DD일'));
    getContribution(today);
  }, []);

  const handleDate = (day: any) => {
    console.log(typeof day);
    setDate(moment(day).format('YYYY년 MM월 DD일'));
    getContribution(day);
  };

  return (
    <Layout>
      <FlexLayout>
        <Calendar onChange={handleDate} calendarType="US" />
        <DetailLayout>
          <DateTitle>{date}</DateTitle>
          <QuestionsLayout>
            {questions.map((question) => {
              return (
                <QuestionBallon>
                  <pre style={{ whiteSpace: 'pre-wrap' }}>
                    {question[1]}
                    {question[0]}
                  </pre>
                </QuestionBallon>
              );
            })}
            {/* <QuestionBallon>
              <pre style={{ whiteSpace: 'pre-wrap' }}>hihihihihihihi</pre>
            </QuestionBallon>
            <QuestionBallon>
              <pre style={{ whiteSpace: 'pre-wrap' }}>hihihihihihihi</pre>
            </QuestionBallon>
            <QuestionBallon>
              <pre style={{ whiteSpace: 'pre-wrap' }}>hihihihihihihi</pre>
            </QuestionBallon>
            <QuestionBallon>
              <pre style={{ whiteSpace: 'pre-wrap' }}>hihihihihihihi</pre>
            </QuestionBallon>
            <QuestionBallon>
              <pre style={{ whiteSpace: 'pre-wrap' }}>hihihihihihihi</pre>
            </QuestionBallon>
            <QuestionBallon>
              <pre style={{ whiteSpace: 'pre-wrap' }}>hihihihihihihi</pre>
            </QuestionBallon>
            <QuestionBallon>
              <pre style={{ whiteSpace: 'pre-wrap' }}>hihihihihihihi</pre>
            </QuestionBallon>
            <QuestionBallon>
              <pre style={{ whiteSpace: 'pre-wrap' }}>hihihihihihihi</pre>
            </QuestionBallon>
            <QuestionBallon>
              <pre style={{ whiteSpace: 'pre-wrap' }}>hihihihihihihi</pre>
            </QuestionBallon>
            <QuestionBallon>
              <pre style={{ whiteSpace: 'pre-wrap' }}>hihihihihihihi</pre>
            </QuestionBallon>
            <QuestionBallon>
              <pre style={{ whiteSpace: 'pre-wrap' }}>hihihihihihihi</pre>
            </QuestionBallon>
            <QuestionBallon>
              <pre style={{ whiteSpace: 'pre-wrap' }}>hihihihihihihi</pre>
            </QuestionBallon>
            <QuestionBallon>
              <pre style={{ whiteSpace: 'pre-wrap' }}>hihihihihihihi</pre>
            </QuestionBallon>
            <QuestionBallon>
              <pre style={{ whiteSpace: 'pre-wrap' }}>hihihihihihihi</pre>
            </QuestionBallon> */}
          </QuestionsLayout>
        </DetailLayout>
      </FlexLayout>
    </Layout>
  );
};

export default Contribution;
