import React, { Component } from 'react';
import './style/style.css'
import HomePage from './homePage';
import CarsPage from './carsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CarPage from './carPage';

class App extends Component {
    state = {}
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route path='cars' element={<CarsPage />} />
                    <Route path='car' element={<CarPage />} />
                </Routes>
            </Router>
        );
    }
}

export default App;