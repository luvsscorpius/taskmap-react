const express = require('express');
const router = express.Router();

// Rota principal/padrao
router.get('/', (req, res) => {
    res.send('Home Page');
});

module.exports = router;