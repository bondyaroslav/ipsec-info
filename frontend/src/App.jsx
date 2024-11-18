import './App.css'
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/molecules/Header.jsx";
import {Main} from "./components/pages/Main.jsx";

const App = () => {

    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>} />
            </Routes>
        </>
    )
}

export default App
