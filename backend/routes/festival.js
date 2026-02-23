const express = require('express');
const router = express.Router();
const Festival = require('../models/Festival');

// Get festival info
router.get('/', async (req, res) => {
    try {
        let festival = await Festival.findOne();
        if (!festival) {
            festival = new Festival({
                name: "The 42nd Annual Apple Harvest Festival",
                year: 2024,
                location: {
                    address: "Ithaca Commons",
                    city: "Ithaca",
                    state: "New York"
                }
            });
            await festival.save();
        }
        res.json(festival);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update festival info
router.patch('/', async (req, res) => {
    try {
        let festival = await Festival.findOne();
        if (!festival) {
            festival = new Festival(req.body);
        } else {
            Object.assign(festival, req.body);
        }
        const updated = await festival.save();
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
