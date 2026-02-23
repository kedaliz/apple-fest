import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VendorCard from '../components/VendorCard';
import './VendorsPage.css';

export default function VendorsPage() {
    const [vendors, setVendors] = useState([]);
    const [filteredVendors, setFilteredVendors] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Fetching vendors from /api/vendors...');
        axios.get('/api/vendors')
            .then(res => {
                console.log('Vendors fetched:', res.data);
                setVendors(res.data);
                setFilteredVendors(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching vendors:', err.message);
                console.error('Full error:', err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const filterByCategory = (category) => {
        setSelectedCategory(category);
        if (category === 'all') {
            setFilteredVendors(vendors);
        } else {
            setFilteredVendors(vendors.filter(v => v.category === category));
        }
    };

    if (loading) return <div className="loading">Loading vendors...</div>;

    if (error) {
        return (
            <main className="vendors-page">
                <h1>Vendors & Entertainment</h1>
                <div className="error-container">
                    <h2>⚠️ Unable to Load Vendors</h2>
                    <p><strong>Error:</strong> {error}</p>
                    <p>The backend server may not be running. Make sure to:</p>
                    <ol>
                        <li>Start MongoDB</li>
                        <li>Run <code>cd backend && npm run seed</code></li>
                        <li>Ensure <code>npm run dev</code> is running both frontend and backend</li>
                    </ol>
                </div>
            </main>
        );
    }

    return (
        <main className="vendors-page">
            <h1>Vendors & Entertainment</h1>

            <div className="filter-buttons">
                <button
                    className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                    onClick={() => filterByCategory('all')}
                >
                    All
                </button>
                <button
                    className={`filter-btn ${selectedCategory === 'food' ? 'active' : ''}`}
                    onClick={() => filterByCategory('food')}
                >
                    Food
                </button>
                <button
                    className={`filter-btn ${selectedCategory === 'craft' ? 'active' : ''}`}
                    onClick={() => filterByCategory('craft')}
                >
                    Crafts
                </button>
                <button
                    className={`filter-btn ${selectedCategory === 'entertainment' ? 'active' : ''}`}
                    onClick={() => filterByCategory('entertainment')}
                >
                    Entertainment
                </button>
            </div>

            <div className="vendors-grid">
                {filteredVendors.length > 0 ? (
                    filteredVendors.map(vendor => (
                        <VendorCard key={vendor._id} vendor={vendor} />
                    ))
                ) : (
                    <p className="no-vendors">No vendors found in this category.</p>
                )}
            </div>
        </main>
    );
}
