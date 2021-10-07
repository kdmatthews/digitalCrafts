import React from 'react'
import { WorkHeader, WorkOrderDiv, WorkParagraph } from '../styled-components/Dashboard'

export default function WorkOrdersDashboard() {
    return (
        <WorkOrderDiv>
            <WorkHeader>Work Order</WorkHeader>
            <WorkParagraph>Item1</WorkParagraph>
            <WorkParagraph>Item2</WorkParagraph>
            <WorkParagraph>Item3</WorkParagraph>
        </WorkOrderDiv>
    )
}
