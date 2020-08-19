const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('home');
})




const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log('The server is now running on port 4000...')
})