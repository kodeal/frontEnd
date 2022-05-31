import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface keywordProps {
  data: Array<Array<any>>;
}

const Keywords = (props: keywordProps) => {
  console.log(props.data);
  const labels = props.data.map((keyword) => {
    return keyword[0];
  });

  const counts = props.data.map((keyword) => {
    return keyword[1];
  });

  const options = {
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: '질문 키워드 개수',
        data: counts,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Bar options={options} data={data} width="1000" height="450" />;
};

export default Keywords;
