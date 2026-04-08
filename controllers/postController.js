const express = require('express');
const router = express.Router();
const archive = require('../data/archive')

/* Index */
const index = router.get('/', (req, res) => {
  const requestedTag = req.query?.tags;

  //0️⃣ se non è applicato alcun filtro
  if (requestedTag == undefined) {
    return res.json(archive);
    //altrimenti...
  } else {
    //1️⃣ preparo un contenitorre per i risultati
    let filteredPosts = [];
    //2️⃣ trasformo i filtri in un formato utilizzabile perchè 👇
    //                           👇 questo è un'unica stringa e mi servono i singoli tag
    const requestedTagsArray = requestedTag.split(' ');
    //console.log(requestedTagsArray);

    archive.filter((post) => {
      
      //3️⃣ cerco i post che contengono almeno uno dei tag
      requestedTagsArray.map((tag) => {

        //ma SOLO SE il post non è già selezionato
        if (!(filteredPosts.includes(post))) {

          //SE contiene un tag...
          if (post.tags.includes(tag)) {
            //... aggiungo il post ai risultati
            filteredPosts = [...filteredPosts, post]
          }
        }
      })
    })

    //4️⃣ risposta
    // SE NON ci sono risultati (array vuoto)
    if (filteredPosts.length === 0) {
      return res.json('0 risultati')
      //ALTRIMENTI restituisco i post filtrati
    } else {
      return res.json(filteredPosts);
    }
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
  console.log(req.body);
  
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