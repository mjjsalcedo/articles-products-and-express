/*jshint esversion: 6 */

const PORT = process.env.Port || 8080;

const express = require('express');
const app = express();
const expHbs = require('express-handlebars');

const hbs = expHbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.get('/', (req,res)=>{
  res.render('home');
});

const server = app.listen(PORT, ()=>{
  console.log('Server running on Port ${PORT}');
});