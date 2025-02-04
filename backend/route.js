// backend/routes.js
const express = require('express');
const { storedData, addData } = require('./data');

const router = express.Router();

// Endpoint pour recevoir les données du Harvester
router.post('/nester', (req, res) => {
    const { scanResult } = req.body;
    
    if (!scanResult) {
        return res.status(400).send({ message: 'Aucune donnée reçue.' });
    }

    addData(scanResult); // Stocke les données
    res.status(200).send({ message: 'Données reçues et stockées.' });
});

// Endpoint pour récupérer les données du Nester
router.get('/nester', (req, res) => {
    res.json(storedData);
});

module.exports = router;
