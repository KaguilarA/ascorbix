const express = require('express'),
  router = express.Router();

router.get(`/`, (req, res) => {
  res.render(`index`, {
    title: `Ascorbix`,
    message: `Hello form index.pug!`
  });
});

router.get(`/login`, (req, res) => {
  res.end('Login view');
});

router.get(`/register`, (req, res) => {
  res.end('Register view');
});

router.get(`*`, (req, res) => {
  res.end('404 page not found');
});

module.exports = router;