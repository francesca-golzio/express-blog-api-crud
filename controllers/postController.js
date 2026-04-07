const express = require('express');
const router = express.Router();
const archive = require('../data/archive')


/* Index */
const index = router.get('/', (req, res) => {
  res.json(posts);
});

/* Show */
const show = router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(post => post.id === id);

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
  const post = posts.find(post => post.id == id);

  if (!post) {
    res.status(404).json({
      error: 'Not found',
      message: 'Post non trovato'
    })
  }

  posts.splice(posts.indexOf(post), 1);

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