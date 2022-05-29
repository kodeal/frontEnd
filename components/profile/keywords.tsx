// import styled from 'styled-components';
// import { Bar } from 'react-chartjs-2';
// import { Chart } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LineController,
//   LineElement,
//   PointElement,
//   LinearScale,
//   Title,
// } from 'chart.js';
// import { useEffect } from 'react';

// const Keywords = () => {
//   useEffect(() => {
//     ChartJS.register(
//       LineController,
//       LineElement,
//       PointElement,
//       LinearScale,
//       Title,
//     );
//   });

//   const options = {
//     legend: {
//       display: false, // label 숨기기
//     },
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             min: 0, // 스케일에 대한 최솟갓 설정, 0 부터 시작
//             stepSize: 1, // 스케일에 대한 사용자 고정 정의 값
//           },
//         },
//       ],
//     },
//   };
//   const labels = [1, 2, 3, 4, 5, 6, 7];

//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: labels,
//         data: [65, 59, 80, 81, 56, 55, 40],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//           'rgba(255, 205, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(201, 203, 207, 0.2)',
//         ],
//         borderColor: [
//           'rgb(255, 99, 132)',
//           'rgb(255, 159, 64)',
//           'rgb(255, 205, 86)',
//           'rgb(75, 192, 192)',
//           'rgb(54, 162, 235)',
//           'rgb(153, 102, 255)',
//           'rgb(201, 203, 207)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };
//   return <Chart type="bar" data={data} />;
// };

// export default Keywords;
