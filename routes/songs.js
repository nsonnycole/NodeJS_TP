const router = require('express').Router();
const _ = require('lodash');
const SongService = require('../services/songService');

<!--Ajoute une nouvelle chanson dans la collection à partir du body. (Append)-->

router.post('/', (req, res) => {

  const key = _.keys(req.body);
  console.log(keys);

  const mandatoryKeys = ['title','album','artist'];
  const difference = _.difference(mandatoryKeys, keys);

  if(difference.length) {

  }
  return SongService.create(req.body)
  red.append(body, 'Yes')
  .then(song => {

    res.status(201).send(song);

  })

  .catch(err => {

    res.status(500).send(err);

  })

  ;

});
<!--Retourne une collection avec tous les chansons existantes-->

router.get('/', (req, res) => {

  SongService.find(req.query)

  .then(songs => {

    res.status(200).send(songs);

  })

  ;

});

<!--Supprime toutes les chansons existantes.-->

router.delete('/', (req, res) => {

  SongService.remove(req.query)

  .then(songs => {

    res.status(200).send(songs);

  })

  ;

});

<!--Retourne la chanson avec l’id passé en paramètre.-->

router.get('/:id', (req, res) => {

  SongService.find(req.query)

  .then(songs => {

    res.status(200).send(songs);

  })

  ;

});
<!-- Modifie la chanson avec l’id passé en paramètre à partir du body. -->
router.put('/:id', (req, res) => {

  SongService.findById(req.params.id)

  .then(songs => {

    res.status(200).send(songs);

  })
  .catch

  ;

});

<!-- Supprime la chason avec l’id passé en paramètre.-->

router.delete('/:id', (req, res) => {

  SongService.remove(req.query)

  .then(songs => {

    res.status(200).send(songs);

  })

  ;

});

/*router.get('artist/:artist', (req, res) => {
  const artist = req.params.artist

  .then(songs => {
    res.status(200).send(songs);

  })
  ;
}*/

module.exports = router;
