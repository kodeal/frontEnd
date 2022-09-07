// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/calendar
import { CalendarDatum, ResponsiveTimeRange } from '@nivo/calendar';
import styled from 'styled-components';

const Layout = styled.div`
  width: 500px;
  height: 400px;
`;

interface ContributionCalendarProps {
  data: Array<CalendarDatum>;
  contribution: Function;
}

const ContributionCalendar = (props: ContributionCalendarProps) => {
  const getLastMonth = () => {
    const date = new Date();
    const month = date.getMonth();
    return [month, month + 1];
  };

  const [lastMonth, currentMonth] = getLastMonth();

  return (
    <Layout>
      <ResponsiveTimeRange
        data={props.data}
        from={`2022-0${lastMonth}-01`}
        to={`2022-0${currentMonth}-30`}
        emptyColor="#eeeeee"
        colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
        margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        onClick={(datum, event) => {
          props.contribution(datum, event);
        }}
      />
    </Layout>
  );
};

export default ContributionCalendar;
