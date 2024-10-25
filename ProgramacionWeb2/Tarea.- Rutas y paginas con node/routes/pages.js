const express = require("express");
const path = require("path");
const router = express.Router();

// Ruta para servir page1.html
router.get('/page1', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'page1.html'));
});

// Ruta para servir page2.html
router.get('/page2', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'page2.html'));
});

// Ruta para servir page3.html
router.get('/page3', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'page3.html'));
});

module.exports = router;
