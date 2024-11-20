import React from 'react'
import { styled, Typography } from '@mui/material'

const StyledLabel = styled(Typography)`
    color: #d1d1d1;
    //margin-bottom: 4px;
    margin-left: 2px;
`

export const Label = ({children}) => {
    return (
        <StyledLabel>
            {children}
        </StyledLabel>
    )
}
