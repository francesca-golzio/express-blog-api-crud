
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

/* Index */
const index = router.get('/', (req, res) => {
  res.json(posts);
});

/* Show */
const show = router.get('/:id', (req, res) => {
  res.json(posts.filter(post => post.id == req.params.id));
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
  res.send(
    // 3)👇 uso index per rimuoverlo  1)👇trovo il post
    posts.splice(posts.indexOf(posts.filter(post => post.id == req.params.id)), 1)
    //                   👆 2) ricavo il suo index
  )
});
