import Button from '@mui/material/Button'
import { styled } from '@mui/material'

const StyledButton = styled(Button)({
    height: '100%',
    color: '#787878',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '&:hover': {
        backgroundColor: 'transparent',
        color: '#9e9e9e',
        boxShadow: 'none',
    },
})

export const CustomButton = ({ variant, color, name, onClick }) => {
    return (
        <StyledButton
            variant={variant}
            color={color}
            onClick={onClick}
        >
            {name}
        </StyledButton>
    )
}
