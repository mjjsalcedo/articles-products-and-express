/*jshint esversion: 6 */

const dbArticles = require('../db/articles');

const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
  res.render('home');
});

router.post('/', function(req,res){
  dbArticles.createArticle(req.body);
  /*res.redirect('/articles');*/
});

router.put('/', function(req,res){
  dbArticles.editArticle(req.body);
  res.redirect('/articles');
});

router.delete('/', function(req,res){
  dbArticles.deleteArticle(req.body);
  res.redirect('/articles');
});

module.exports = router;



