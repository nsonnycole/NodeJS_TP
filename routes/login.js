const router = require('express').Router();
const _ = require('lodash');

router.get('/', function(req, res) {
  if (req.accepts('text/html')) {
    res.render('login');
  }
  else {
    res.send(406, {err: 'Not valid type for asked ressource'});
  }
});

module.exports = router;
