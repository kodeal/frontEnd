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
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const DetailLayout = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  gap: 15px;
`;

const DateTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const QuestionsLayout = styled.div`
  width: 100%;
  max-height: 100%;
  overflow: scroll;
  border-radius: 10px;
  border: 1px solid rgb(223, 223, 223);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const QuestionBallon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0064ff;
  border-radius: 10px;
  border: none;

  padding: 10px 16px;
  margin-top: 5px;
  word-break: break-all;
`;

const Question = styled.span`
  color: white;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.25px;
`;

const QuestionTime = styled.span`
  color: #fafafa;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.25px;
`;

const NoLog = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: rgb(120, 120, 120);
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
            {questions.length ? (
              questions.map((question, index) => {
                return (
                  <QuestionBallon key={index}>
                    <Question> {question[1]}</Question>
                    <QuestionTime> {question[0]}</QuestionTime>
                  </QuestionBallon>
                );
              })
            ) : (
              <NoLog>질문 내역이 없습니다.</NoLog>
            )}
          </QuestionsLayout>
        </DetailLayout>
      </FlexLayout>
    </Layout>
  );
};

export default Contribution;
