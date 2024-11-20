import { styled, TextField } from '@mui/material'

const StyledInput = styled(TextField)`
    width: 100%;
    height: 60px;
    margin-top: 2px;
    
    .MuiOutlinedInput-root {
        border: 2px solid #454545;
        border-radius: 8px;
        height: 50px;
        color: #949494;
        
        &:hover .MuiOutlinedInput-notchedOutline {
            border: none;
        }

        &.Mui-focused .MuiOutlinedInput-notchedOutline {
            border: none;
        }
    }
`

export const Input = ({name, label, value, onChange}) => {
    return (
        <StyledInput
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            variant="outlined"
        />
    )
}
