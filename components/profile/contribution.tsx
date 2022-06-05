import styled from 'styled-components';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import { useEffect } from 'react';
import { contributionMonth } from '@utils/apis/api';
import { useCookies } from 'react-cookie';

const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Contribution = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['userInfo']);

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
    console.log(e);
  };

  return (
    <Layout>
      <Calendar onChange={handleDate} />
    </Layout>
  );
};

export default Contribution;
