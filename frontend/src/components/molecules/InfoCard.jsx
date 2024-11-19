import React from 'react'
import { styled } from '@mui/material'

const StyledInfoCard = styled('article')`
    max-width: 100%;
    min-width: 250px;
    border-radius: 8px;
    background-color: #2f2f2f;
    color: #d1d1d1;
    padding: 16px;
    margin: 16px;
`

export const InfoCard = ({children}) => {
    return (
        <StyledInfoCard>
            {children}
        </StyledInfoCard>
    )
}
