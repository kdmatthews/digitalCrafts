import React from 'react'
import { ChartDiv } from '../styled-components/Dashboard';
import {Pie, Doughnut} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class ChartDashboard extends React.Component {
  render() {
    return (
      <ChartDiv>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

        
      </ChartDiv>
    );
  }
}

// export default function ChartDashboard() {
//     return (
//         <ChartDiv>
//             <h1>Chart Data</h1>
//         </ChartDiv>
//     )
// }
