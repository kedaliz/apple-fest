const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('✓ MongoDB connected'))
    .catch(err => console.error('✗ MongoDB error:', err));

// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'Apple Festival API Server',
        status: 'running',
        endpoints: {
            vendors: '/api/vendors',
            events: '/api/events',
            festival: '/api/festival'
        }
    });
});

app.use('/api/vendors', require('./routes/vendors'));
app.use('/api/events', require('./routes/events'));
app.use('/api/festival', require('./routes/festival'));

// Serve React frontend for all other routes (SPA fallback)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✓ Server running on port ${PORT}`);
});
