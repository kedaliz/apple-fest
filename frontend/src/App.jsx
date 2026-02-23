import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import VendorsPage from './pages/VendorsPage';
import DirectionsPage from './pages/DirectionsPage';
import FAQPage from './pages/FAQPage';
import './App.css';

export default function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/vendors" element={<VendorsPage />} />
                    <Route path="/directions" element={<DirectionsPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}
