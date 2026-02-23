import React, { useState } from 'react';
import './DirectionsPage.css';

export default function DirectionsPage() {
    const [selectedLocation, setSelectedLocation] = useState(null);

    return (
        <main className="directions-page">
            <h1>Directions & Map</h1>

            <section className="directions-section">
                <div className="location-info">
                    <h2>Ithaca Commons</h2>
                    <p className="address">
                        <strong>Address:</strong> Ithaca Commons, Ithaca, NY 14850
                    </p>
                    <p className="description">
                        The Ithaca Commons is a pedestrian mall in downtown Ithaca, featuring restaurants, shops, and community spaces. It's the perfect location for the Apple Harvest Festival!
                    </p>

                    <div className="directions-grid">
                        <div className="direction-card">
                            <h3>🚗 By Car</h3>
                            <p>Free parking is available in downtown Ithaca. Use Google Maps or your preferred navigation app and search for "Ithaca Commons, Ithaca, NY"</p>
                        </div>
                        <div className="direction-card">
                            <h3>🚌 By Bus</h3>
                            <p>TCAT (Tompkins Consolidated Area Transit) serves Ithaca with regular bus routes to downtown. Visit www.tcatbus.com for schedules.</p>
                        </div>
                        <div className="direction-card">
                            <h3>🚶 On Foot</h3>
                            <p>If you're staying downtown or near Cornell University, the Commons is within walking distance. Follow the signs to the pedestrian mall.</p>
                        </div>
                    </div>
                </div>

                <div className="map-container">
                    <iframe
                        title="Ithaca Commons Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.5277329644023!2d-76.49726!3d42.459568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d081d5e5e5e5e5%3A0x0!2sIthaca%20Commons!5e0!3m2!1sen!2sus!4v1234567890"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </main>
    );
}
