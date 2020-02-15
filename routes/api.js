const express = require ('express');
const router = express.Router();
const Nomination = require('../models/nomination');

router.get('/results', (req, res, next) => {

  //this will return all the data, exposing only the id and nominee field to the client
  Nomination.find({}, 'nominee')
    .then(data => res.json(data))
    .catch(next)
});

router.get('/nominate', (req, res, next) => {
    res.send('Nominate a HOTW');
});

router.post('/nominate', (req, res, next) => {
  if(req.body.nominee){
    Nomination.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  }else {
    res.json({
      error: "The input field is empty"
    })
  }
});

module.exports = router;