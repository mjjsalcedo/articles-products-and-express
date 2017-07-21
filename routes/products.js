/*jshint esversion: 6 */

const dbProducts = require('../db/products');

const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
  var currentProducts = dbProducts.checkCollection();
  res.render('./templates/products/index', {productList:currentProducts});
});

router.get('/:id', (req,res)=>{
  var currentProducts = dbProducts.checkCollection();
  res.render('./templates/products/index', {productList:currentProducts});
});

router.post('/', function(req,res){
  dbProducts.createProduct(req.body);
  res.redirect('/products');
});

router.put('/:id', function(req,res){
  var productId = req.params.id;
  req.body.id = productId;
  dbProducts.editProduct(req.body);
  res.redirect('/products/' + productId);
});

router.delete('/:id', function(req,res){
  var productId = req.params.id;
  dbProducts.deleteProduct(req.body);
  res.redirect('/products/' + productId);
});

module.exports = router;