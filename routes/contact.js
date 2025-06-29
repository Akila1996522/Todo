const express = require('express');

const router = express.Router();

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Form Data:', { name, email, message });
  res.render('thankyou', { name, email, message });
});

module.exports = router;
