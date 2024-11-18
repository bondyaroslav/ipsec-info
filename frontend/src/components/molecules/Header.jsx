import React from 'react'
import { Link } from 'react-router-dom'
import { CustomButton } from '../atoms/Button.jsx'
import { styled } from '@mui/material'

const StyledHeader = styled('nav')`
    display: flex;
    width: 900px;
    height: 60px;
    background-color: #121212; 
    border: 2px solid #787878;
    border-radius: 8px;
    margin-top: 8px;
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
