import React, { useState } from 'react';
import './VendorCard.css';

export default function VendorCard({ vendor }) {
    const [imageError, setImageError] = useState(false);

    const categoryColors = {
        food: '#d86f23',
        craft: '#4c7f52',
        entertainment: '#664d85'
    };

    const getPlaceholder = () => {
        const bgColor = categoryColors[vendor.category] || '#999';
        const text =
            vendor.category === 'food' ? 'FOOD' :
                vendor.category === 'craft' ? 'CRAFT' :
                    'EVENT';

        const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                <rect width="400" height="300" fill="${bgColor}"/>
                <text x="200" y="160" font-size="48" text-anchor="middle" fill="white" font-weight="bold">${text}</text>
            </svg>
        `;
        return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
    };

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="vendor-card">
            <img
                src={imageError ? getPlaceholder() : (vendor.image || getPlaceholder())}
                alt={vendor.name}
                className="vendor-image"
                onError={handleImageError}
            />
            <div className="vendor-content">
                <h3 className="vendor-name">{vendor.name}</h3>
                <span className="vendor-category">{vendor.category}</span>
                {vendor.description && <p>{vendor.description}</p>}
                {vendor.hours && <p className="vendor-hours"><strong>Hours:</strong> {vendor.hours}</p>}
                {vendor.contact && <p className="vendor-contact"><strong>Contact:</strong> {vendor.contact}</p>}
            </div>
        </div>
    );
}
