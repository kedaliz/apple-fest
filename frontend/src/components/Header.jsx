import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Header.css';

export default function Header() {
    const [festival, setFestival] = useState(null);

    useEffect(() => {
        axios.get('/api/festival').then(res => setFestival(res.data)).catch(err => console.error(err));
    }, []);

    return (
        <header className="header">
            <div className="header-container">
                <figure className="logo-figure">
                    <a href="/">
                        <img src="/images/apple-harvest-logo.svg" alt="Apple Harvest Festival Logo" className="logo" />
                    </a>
                </figure>
                <div className="header-content">
                    <h1 className="title">{festival?.name || 'The 42nd Annual Apple Harvest Festival'}</h1>
                    <p className="subtitle">{festival?.year || 2024}</p>
                </div>
            </div>
        </header>
    );
}
