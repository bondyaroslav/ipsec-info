import { Box, styled } from '@mui/material'
import { Label } from '../atoms/Label.jsx'
import { CodeBlock } from './CodeBlock.jsx'

const StyledUserId = styled(Box)`
    display: flex;
    justify-content: center;
`

export const UserIdComponent = ({ userId }) => {

    if (userId) {
        return (
            <article>
                <StyledUserId>
                    <Label>Save this ID for future logins!</Label>
                </StyledUserId>
                <CodeBlock>{userId}</CodeBlock>
            </article>
        )
    }
}