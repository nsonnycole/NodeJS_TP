const router = require('express').Router();
const _ = require('lodash');
const SongService = require('../services/songService');
const APIError = require('../lib/apiError');

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

     res.render('songAdd', {song: song});

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

/*router.get('/:id', (req, res) => {

  SongService.findById(req.params.id)

  .then(songs => {
    res.status(200).send(songs);

  })

  ;

});*/

<!--Retourne la chanson avec l’id passé en paramètre.-->

router.get('/:id', (req, res, next) => {
  if (!req.accepts('text/html') && !req.accepts('application/json')) {
    return next(new APIError(406, 'Not valid type for asked resource'));
  }

  SongService.findById(req.params.id)
  .then(song => {
    if (!song) {
      return next(new APIError(404, `id ${req.params.id} not found`));
    }

    if (req.accepts('text/html')) {
      return res.render('song', {song: song});
    }

    if (req.accepts('application/json')) {
      return res.status(200).send(song);
    }
  })
  .catch(next)
  ;
});


<!-- Modifie la chanson avec l’id passé en paramètre à partir du body. -->
router.put('/:id', (req, res) => {

  SongService.findById(req.params.id)

  .then(songs => {

    res.status(200).send(songs);

  })
  .catch(next)

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


<!-- Ajout dune chanson -->
/*var songBodyVerification = function(req, res, next) {
    var attributes = _.keys(req.body);
    var mandatoryAttributes = ['title', 'album', 'artist'];
    var missingAttributes = _.difference(mandatoryAttributes, attributes);
    if (missingAttributes.length) {
        res.status(400).send({err: missingAttributes.toString()});
    }
    else {
        if (req.body.title && req.body.album && req.body.artist) {
            next();
        }
        else {
            var error = mandatoryAttributes.toString() + ' are mandatory';
            if (req.accepts('text/html')) {
                req.session.err = error;
                req.session.song = req.body;
                res.redirect('/songs/add');
            }
            else {
                res.status(400).send({err: error});
            }
        }
    }
};*/
/*
router.post('/', songBodyVerification, function(req, res) {
    SongService.create(req.body)
        .then(function(song) {
            if (req.accepts('text/html')) {
                return res.redirect('/songs/' + song._id);
            }
            if (req.accepts('application/json')) {
                return res.status(201).send(song);
            }
        })
        .catch(function(err) {
            res.status(500).send(err);
        })
    ;
});
*/

module.exports = router;
