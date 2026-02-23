import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Follow Us</h3>
                <nav className="social-links">
                    <a href="https://www.linkedin.com/company/downtown-ithaca-alliance/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://www.youtube.com/downtownithaca" target="_blank" rel="noopener noreferrer">YouTube</a>
                    <a href="https://x.com/downtownithaca" target="_blank" rel="noopener noreferrer">X</a>
                </nav>
                <p>&copy; 2024 The Apple Harvest Festival. All rights reserved.</p>
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.9 }}>Photos are not owned by the festival organizers and are used for demonstration purposes.</p>
            </div>
        </footer>
    );
}
