import { styled, Typography } from '@mui/material'

const StyledTitle = styled(Typography)`
    color: #d1d1d1;
    margin: 16px;
`

export const Title = ({children, variant}) => {
    return (
        <StyledTitle variant={variant}>
            {children}
        </StyledTitle>
    )
}
