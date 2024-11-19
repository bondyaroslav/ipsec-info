import React from 'react'
import { styled } from '@mui/material'

const StyledContentCard = styled('section')`
    width: 100%;
    max-width: 900px;
    min-width: 250px;
    border: 1px solid #454545;
    border-radius: 8px;
    margin: 0 16px 16px 0; 
    padding: 16px;
    box-sizing: border-box;

    @media (max-width: 600px) {
        padding: 12px;
    }
`

export const ContentCard = ({children}) => {
    return (
        <StyledContentCard>
            {children}
        </StyledContentCard>
    )
}
