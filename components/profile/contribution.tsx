import styled from 'styled-components';
import moment from 'moment';

import { useEffect, useState } from 'react';
import { contributionDay, contributionMonth } from '@utils/apis/api';
import { useCookies } from 'react-cookie';
import ContributionCalendar from '@components/util/ContributionCalendar';
import dynamic from 'next/dynamic';

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 410px;
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
  gap: 15px;
`;

const DateTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const QuestionsLayout = styled.div`
  width: 90%;
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
  min-width: 60px;
`;

const NoLog = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: rgb(120, 120, 120);
`;

interface contributedListType {
  day: string;
  value: number;
}

const Contribution = () => {
  const [contributedList, setContributedList] = useState<
    Array<contributedListType>
  >([]);
  const [cookies, setCookie, removeCookie] = useCookies(['userInfo']);
  const [date, setDate] = useState(null);
  const [questions, setQuestions] = useState([]);

  const getContribution = async (date: any) => {
    const [year, month, day] = moment(date).format('YYYY MM DD').split(' ');
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

  const getContributionMonth = async (date: any) => {
    console.log(date);

    const [year, month, day] = moment(date).format('YYYY MM DD').split(' ');
    const result = await contributionMonth(
      cookies.userInfo.userid,
      year,
      month,
    );
    console.log(result);
    const contributedArr = [];
    for (let i in result[Number(month)]) {
      if (Number(i) < 10) {
        contributedArr.push({
          day: `${year}-${month}-0${i}`,
          value: result[Number(month)][i],
        });
      } else {
        contributedArr.push({
          day: `${year}-${month}-${i}`,
          value: result[Number(month)][Number(i)],
        });
      }
    }
    console.log(contributedArr);
    setContributedList([...contributedArr]);
  };

  useEffect(() => {
    const today = moment();
    setDate(today.format('YYYY년 MM월 DD일'));
    getContributionMonth(today);
    getContribution(today);
  }, []);

  const handleDate = (day: any, event: any) => {
    console.log(day, event);
    setDate(moment(day.day).format('YYYY년 MM월 DD일'));
    getContribution(day.day);
  };

  const UserContributionCalendar = dynamic(
    () => import('../util/ContributionCalendar'),
    {
      ssr: false,
    },
  );

  return (
    <Layout>
      <FlexLayout>
        <UserContributionCalendar
          data={contributedList}
          contribution={handleDate}
        />
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
