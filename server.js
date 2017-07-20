/*jshint esversion: 6 */

const PORT = process.env.Port || 8080;

const express = require('express');
const app = express();
const expHbs = require('express-handlebars');
const productRoutes = require('./routes/products');
const articlesRoutes = require('./routes/articles');

const hbs = expHbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.use('/products', products);
app.use('/articles', articles);

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.get('/', (req,res)=>{
  res.render('home');
});

const server = app.listen(PORT, ()=>{
  console.log('Server running on Port ${PORT}');
});