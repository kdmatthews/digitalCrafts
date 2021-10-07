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
        '#4297A0',
        '#F9BDC0',
        '#B5DFD6',
        '#F8EA8C',
        '#9F5060'
      ],
      hoverBackgroundColor: [
      '#2F5061',
      '#ED7890',
      '#91CABE',
      '#E1C340',
      '#AC203D'
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
