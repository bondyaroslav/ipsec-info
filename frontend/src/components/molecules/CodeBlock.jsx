import React, { useState } from 'react'
import { Box, styled, Typography } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DoneIcon from '@mui/icons-material/Done';
import { Notification } from '../atoms/Notification.jsx'

const StyledCodeBlock = styled('article')(({ isClicked }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '100%',
    minWidth: '250px',
    borderRadius: '8px',
    backgroundColor: isClicked ? '#2a292b' : '#201f21',
    color: '#d1d1d1',
    padding: '16px',
    margin: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    overflow: 'auto',
    '&:hover': {
        backgroundColor: isClicked ? '#323132' : '#282728',
        color: '#9e9e9e',
    },
}))

export const CodeBlock = ({ children }) => {
    const [notification, setNotification] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(children)
            setNotification(true)
            setIsClicked(true)
            setTimeout(() => setIsClicked(false), 1500)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            {notification && (
                <Notification
                    message="Copied!"
                    onClose={() => setNotification(false)}
                />
            )}
            <StyledCodeBlock isClicked={isClicked} onClick={handleCopy}>
                <Typography
                    component="pre"
                    sx={{ maxWidth: '100%', overflowX: 'auto' }}
                >{children}</Typography>
                {isClicked ? <DoneIcon/> : <ContentCopyIcon />}
            </StyledCodeBlock>
        </>
    )
}
