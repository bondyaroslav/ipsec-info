import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/molecules/Header.jsx'
import { Main } from './components/pages/Main.jsx'
import { styled } from '@mui/material'

const StyledWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 900px;
`

const App = () => {
    return (
        <StyledWrapper>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </StyledWrapper>
    )
}

export default App
