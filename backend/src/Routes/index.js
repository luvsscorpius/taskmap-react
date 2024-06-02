const express = require('express');
const router = express.Router();

// Rota principal/padr]ao
router.get('/', (req, res) => {
    res.send('Home Page');
});

module.exports = router;