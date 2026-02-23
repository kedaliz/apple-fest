import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <ul className="nav-menu">
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/vendors" onClick={() => setIsOpen(false)}>Vendors & Entertainment</Link></li>
                    <li><Link to="/directions" onClick={() => setIsOpen(false)}>Directions</Link></li>
                    <li><Link to="/faq" onClick={() => setIsOpen(false)}>FAQ/Contacts</Link></li>
                </ul>
            </nav>
        </>
    );
}
