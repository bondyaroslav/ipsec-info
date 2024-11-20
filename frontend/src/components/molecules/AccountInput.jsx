import { Label } from '../atoms/Label.jsx'
import { Input } from '../atoms/Input.jsx'
import { styled } from '@mui/material'

const StyledAccountInput = styled('article')`
    
`

export const AccountInput = ({label, name, value, onChange}) => {
    return (
        <StyledAccountInput>
            <Label>{label}</Label>
            <Input
                name={name}
                value={value}
                onChange={onChange}
            />
        </StyledAccountInput>
    )
}