const router = require('express').Router();

const SongService = require('../services/songService');
const artistService = require('../services/artistService');

router.post('/', (req, res) => {

  return artistService.create(req.body)

  router.get('/', (req, res) => {

    artistService.find(req.query)
    
    .then(songs => {

      res.status(200).send(songs);

    })

    ;

  });
module.exports = router;
