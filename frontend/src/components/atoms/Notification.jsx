import { useEffect } from 'react'
import { styled, Typography } from '@mui/material'

const StyledNotification = styled('div')({
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '8px 16px',
    backgroundColor: '#323232',
    color: '#fff',
    borderRadius: '4px',
    zIndex: 1000,
    opacity: 0,
    '&.visible': {
        opacity: 1,
    },
})

export const Notification = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose()
        }, 1500)
        return () => clearTimeout(timer)
    }, [onClose])

    return (
        <StyledNotification className="visible">
            <Typography>{message}</Typography>
        </StyledNotification>
    )
}
