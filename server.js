const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts');


/* Rendo accessibili gli assets static */
app.use(express.static('public'));

/* Server Index */
app.get('/', (req, res) => {
  res.send('Sono il server del blog');
});

app.use('/posts', postsRouter);

/* Il Server sta in ascolto alla port 3000 */
app.listen(3000, () => {
  console.log('Il Server gira qui http://localhost:3000');
});