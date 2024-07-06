import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <nav className="navbar">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Все о товаре</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Характеристики</NavLink>
                    <NavLink to="/reviews" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Отзывы 209</NavLink>
                    <NavLink to="/questions" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Вопросы 37</NavLink>
                    <NavLink to="/videos" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Видео 9</NavLink>
                    <NavLink to="/together" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Покупают вместе</NavLink>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/reviews" element={<div>Отзывы 209</div>} />
                    <Route path="/questions" element={<div>Вопросы 37</div>} />
                    <Route path="/videos" element={<div>Видео 9</div>} />
                    <Route path="/together" element={<div>Покупают вместе</div>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;