/*jshint esversion: 6 */

const PORT = process.env.Port || 8080;

const express = require('express');
const app = express();
const expHbs = require('express-handlebars');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const articlesRoutes = require('./routes/articles');

const hbs = expHbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/products', productRoutes);
app.use('/articles', articlesRoutes);

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

const server = app.listen(PORT, ()=>{
  console.log(`Server running on Port ${PORT}`);
});