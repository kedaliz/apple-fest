import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomePage.css';

export default function HomePage() {
    const [festival, setFestival] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/festival')
            .then(res => {
                setFestival(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="loading">Loading...</div>;

    return (
        <main className="home-page">
            <section className="hero">
                <img src="/images/Applefest2022_CM-7.jpg" alt="Apple Harvest Festival" className="hero-image" />
                <h2 className="hero-title">Welcome!</h2>
                <p className="hero-text">
                    The Apple Harvest Festival, held annually in downtown Ithaca, is a beloved community event celebrating the bounty of the fall season. Featuring local farmers, artisans, and vendors, the festival offers a vibrant array of delicious apple-themed treats, fresh produce, unique crafts, and live entertainment.
                </p>
            </section>

            <section className="info-section">
                <h2 className="section-header">Apple Fest Logistics</h2>
                <div className="logistics-grid">
                    <div className="logistics-card">
                        <h3>Location</h3>
                        <p>Presented by the Downtown Ithaca Alliance, the annual festival is located on the Ithaca Commons in Ithaca, New York</p>
                    </div>

                    <div className="logistics-card">
                        <h3>Dates & Hours</h3>
                        <ul>
                            <li>Friday, September 27: 12pm - 6pm</li>
                            <li>Saturday, September 28: 10am - 6pm</li>
                            <li>Sunday, September 29: 10am - 6pm</li>
                        </ul>
                    </div>

                    <div className="logistics-card">
                        <h3>Featured</h3>
                        <p>100+ local vendors, live entertainment, farm-fresh foods, and crafts from talented artisans</p>
                    </div>
                </div>
            </section>

            <section className="history-section">
                <div className="history-content">
                    <div className="history-text">
                        <h2>Ithaca & Its Apple Fest History</h2>
                        <p>Ithaca is a vibrant city in upstate New York and the county seat of Tompkins County, full of activities and attractions for visitors to explore.</p>
                        <p>Since 1982, the Apple Harvest Festival has become one of Ithaca's most famous events, hosting apples, baked goods, family entertainment, games, and more. Over 100 talented artists, crafters, bakers, and makers come together for the Apple Harvest Craft Fair!</p>
                        <p>The festival is held in the Ithaca Commons, a vibrant area full of restaurants, shops, and community spaces.</p>
                    </div>
                    <div className="history-image">
                        <img src="/images/people-eating-apples.jpg" alt="People at the festival" />
                    </div>
                </div>
            </section>

            <section className="sidebar-section">
                <div className="sidebar">
                    <div className="sidebar-content">
                        <h3>The Three W's</h3>
                        <h4>What</h4>
                        <p>The 42nd Annual Apple Harvest Festival</p>

                        <h4>When & Where</h4>
                        <p>Located in Ithaca, New York, on the Ithaca Commons</p>
                        <ul className="dates-list">
                            <li>Friday, September 27: 12pm - 6pm</li>
                            <li>Saturday, September 28: 10am - 6pm</li>
                            <li>Sunday, September 29: 10am - 6pm</li>
                        </ul>
                    </div>
                    <div className="sidebar-image">
                        <img src="/images/commons-far.jpg" alt="Ithaca Commons" />
                    </div>
                </div>
            </section>
        </main>
    );
}
