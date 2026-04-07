const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController.js');

/* Posts array */
const posts = [
  {
    id: 1,
    title: 'Post Uno',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
    image: '/images/post1.svg',
    tags: ['intro', 'lorem']
  },
  {
    id: 2,
    title: 'Post Due',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
    image: '/images/post2.svg',
    tags: ['news', 'example']
  },
  {
    id: 3,
    title: 'Post Tre',
    content: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
    image: '/images/post3.svg',
    tags: ['tips', 'lorem']
  },
  {
    id: 4,
    title: 'Post Quattro',
    content: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
    image: '/images/post4.svg',
    tags: ['howto', 'example']
  },
  {
    id: 5,
    title: 'Post Cinque',
    content: 'Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna.',
    image: '/images/post5.svg',
    tags: ['lorem', 'final']
  }
];

/* Lista Post (Index) */
router.get('/', postController.index);

/* Mostro un post (Show) */
router.get('/:id', postController.show);

/* Creo un nuovo post (Store) */
router.post('/', postController.store);

/* Aggiorno tutto un post (Update) */
router.put('/:id', postController.update);

/* Aggiorno parte di un post (Modify) */
router.patch('/:id', postController.modify);

/* Elimino un post (Destroy) */
router.delete('/:id', postController.destroy);

module.exports = router;