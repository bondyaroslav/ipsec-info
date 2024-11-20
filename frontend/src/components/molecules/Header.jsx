import { Link } from 'react-router-dom'
import { CustomButton } from '../atoms/Button.jsx'
import { styled } from '@mui/material'

const StyledHeader = styled('nav')`
    display: flex;
    max-width: 900px;
    min-width: 250px;
    height: 60px;
    background-color: #121212; 
    border: 2px solid #787878;
    border-radius: 8px;
    margin: 8px 0 8px 0;

    @media (max-width: 600px) {
        margin: 8px 8px 0 8px;
    }
`

export const Header = () => {
    return (
        <StyledHeader>
            <Link to="/">
                <CustomButton variant="contained" color="grey" name="Home" />
            </Link>
            <Link to="auth">
                <CustomButton variant="contained" color="grey" name="Auth"/>
            </Link>
        </StyledHeader>
    )
}
