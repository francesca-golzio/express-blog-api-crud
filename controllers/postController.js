const express = require('express');
const router = express.Router();
const archive = require('../data/archive')

/* Index */
const index = router.get('/', (req, res) => {
  const requestedTag = req.query?.tag;
  //console.log(requestedTag);
  const filteredPosts = archive.filter((post) => post.tags.includes(requestedTag));

  /* SE tag non c'è (undefined) >>> res.json(archive); */
  if (requestedTag == undefined) {
    //console.log('Nessun filtro di ricerca applicato');
    return res.json(archive);
    
    /* SE INVECE tag c'è ma NON corrisponde ad alcun post >>> res.json('0 risultati'); */
  } else if (filteredPosts.length === 0) {
    //console.log('0 risultati');
    return res.json('0 risultati')
    
      /* SE INVECE tag c'è >>> res.json(filteredPosts); */
  } else {
    return res.json(filteredPosts);
  }



});

/* Show */
const show = router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = archive.find(post => post.id === id);

  if (!post) {
    return res.status(404).json({
      error: 'Not found',
      message: 'Post non trovato'
    })
  }

  res.json(post);
});

/* Store */
const store = router.post('/', (req, res) => {
  res.send(`Nuovo post creato`);
});

/* Update */
const update = router.put('/:id', (req, res) => {
  res.send(`NEW! Post ${req.params.id} aggiornato`);
});

/* Modify */
const modify = router.patch('/:id', (req, res) => {
  res.send(`Post ${req.params.id} aggiornato (minor updates)`);
});

/* Destroy */
const destroy = router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = archive.find(post => post.id == id);

  if (!post) {
    res.status(404).json({
      error: 'Not found',
      message: 'Post non trovato'
    })
  }

  archive.splice(archive.indexOf(post), 1);
  console.log(archive)

  res.sendStatus(204)
});

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}