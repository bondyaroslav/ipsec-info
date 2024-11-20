import { AccountInput } from '../molecules/AccountInput.jsx'
import { CustomButton } from '../atoms/Button.jsx'
import { styled, Box } from '@mui/material'
import { Label } from '../atoms/Label.jsx'

const StyledAuthForm = styled('section')`
    min-width: 350px;
    max-width: 400px;
    width: 100%;
    box-sizing: border-box;
    margin: 16px;
    padding: 16px;
    background-color: #201f21;
    border: 2px solid #454545;
    border-radius: 8px;
`

const ButtonWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 8px;
    margin-top: 8px;
`

const StyledCreateAccount = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledLabel = styled(Label)`
    padding: 50px;
`

export const AuthForm = (
    {
        accountId,
        password,
        loginUser,
        onAccountIdChange,
        onPasswordChange,
        onIsAuthChange,

    }) => {
    return (
        <StyledAuthForm>
            <AccountInput
                label="Account Hash"
                name="hash"
                value={accountId}
                onChange={(event) => onAccountIdChange(event.target.value)}
            />
            <AccountInput
                label="Password"
                name="password"
                value={password}
                onChange={(event) => onPasswordChange(event.target.value)}
            />
            <ButtonWrapper>
                <CustomButton
                    variant="outlined"
                    color="grey"
                    name="Continue"
                    onClick={loginUser}
                />
            </ButtonWrapper>
            <StyledCreateAccount>
                <StyledLabel>No account?</StyledLabel>
                <CustomButton
                    variant="primary"
                    color="grey"
                    name="Create one"
                    onClick={onIsAuthChange}
                />
            </StyledCreateAccount>
        </StyledAuthForm>
    )
}
