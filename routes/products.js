/*jshint esversion: 6 */

const dbProducts = require('../db/products');

const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
  res.render('home');
});

router.post('/', function(req,res){
  dbProducts.createProduct(req.body);
  res.redirect('/products');
});

router.put('/', function(req,res){
  dbProducts.editProduct(req.body);
  res.redirect('/products');
});

router.delete('/', function(req,res){
  dbProducts.deleteProduct(req.body);
  res.redirect('/products');
});

module.exports = router;