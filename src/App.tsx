import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Register from './pages/Register.tsx';
import Login from './pages/Login.tsx';
import NavBar from './components/NavBar/NavBar.tsx';
import CoffeeShopMainPage from './pages/CoffeeShopMainPage.tsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<NavBar />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/cafe/:id" element={<CoffeeShopMainPage />} />
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
