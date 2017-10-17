const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'PowerUp' });
});
router.get('/section', (req, res, next) => {
  res.render('section', { title: 'Section' });
});

module.exports = router;
