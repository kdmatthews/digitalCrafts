import React from 'react';
import { DashboardDiv } from '../styled-components/Dashboard';
import ChartDashboard from './ChartDashboard';
import WorkOrdersDashboard from './WorkOrdersDashboard';

export default function Dashboard() {
    return (
        <DashboardDiv>
           
            <ChartDashboard />
            <WorkOrdersDashboard />
        </DashboardDiv>
    )
}
