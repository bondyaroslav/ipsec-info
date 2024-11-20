import { AccountInput } from '../molecules/AccountInput.jsx'
import { CustomButton } from '../atoms/Button.jsx'
import { UserIdComponent } from '../molecules/UserIdComponent.jsx'
import { styled, Box } from '@mui/material'

const StyledRegisterForm = styled('section')`
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

export const RegisterForm = (
    {
        password,
        userId,
        registerNewUser,
        onPasswordChange,
        onIsAuthChange,
    }
) => {
    return (
        <StyledRegisterForm>
            <AccountInput
                label="Enter a password for your account:"
                name="password"
                value={password}
                onChange={(event) => onPasswordChange(event.target.value)}
            />
            <ButtonWrapper>
                <CustomButton
                    variant="outlined"
                    color="grey"
                    name="Continue"
                    onClick={registerNewUser}
                />
                <CustomButton
                    variant="primary"
                    color="grey"
                    name="Back"
                    onClick={onIsAuthChange}
                />
            </ButtonWrapper>
            <UserIdComponent userId={userId}/>
        </StyledRegisterForm>
    )
}
