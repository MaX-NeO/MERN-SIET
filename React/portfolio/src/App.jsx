import Navbar from "./components/Navbar"
import Profile from "./pages/Profile"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}

export default App