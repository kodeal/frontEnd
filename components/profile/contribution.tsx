import styled from 'styled-components';
import moment from 'moment';

import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import { contributionMonth } from '@utils/apis/api';
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
`;

const DateTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const Contribution = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['userInfo']);
  const [date, setDate] = useState(null);

  //   const [value, onChange] = useState(new Date());

  const getContribution = async () => {
    const now = new Date(); // 현재 날짜 및 시간
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const result = await contributionMonth(
      cookies.userInfo.userid,
      year,
      month,
    );
  };
  useEffect(() => {
    getContribution();
  }, []);

  const handleDate = (e: any) => {
    console.log(typeof e);
    setDate(e.toString());
  };

  const formatTest = (e: any): string => {
    console.log(e);
    return '';
  };

  return (
    <Layout>
      <FlexLayout>
        <Calendar onChange={handleDate} calendarType="US" />
        <DetailLayout>
          <DateTitle>{moment(date).format('YYYY년 MM월 DD일')}</DateTitle>
        </DetailLayout>
      </FlexLayout>
    </Layout>
  );
};

export default Contribution;
