const express = require ('express');
const router = express.Router();
const Nomination = require('../models/nomination');

router.get('/results', (req, res, next) => {
  Nomination.find({}, 'nominee message')
    .then(data => res.json(data))
    .catch(next)
});

router.post('/nominate', (req, res, next) => {
  if(req.body.nominee){
    Nomination.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  } else {
    res.json({
      error: 'The input field is empty'
    })
  }
});

module.exports = router;