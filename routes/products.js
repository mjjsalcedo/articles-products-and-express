/*jshint esversion: 6 */

const dbProducts = require('../db/products');

const express = require('express');
const router = express.Router();


router.get('/', (req,res)=>{
  let currentProducts = dbProducts.checkCollection();
  res.render('./templates/products/index', {productList:currentProducts});
});

router.get('/new', (req,res)=>{
  res.render('./templates/products/new');
});

router.get('/:id', (req,res)=>{
  var nums = Number(req.params.id);
  var displayRevisedItem = [];
  var currentProducts = dbProducts.checkCollection();
  var editedProduct = currentProducts[nums];
  displayRevisedItem.push(editedProduct);
  res.render('./templates/products/product', {'result': displayRevisedItem});
});

router.get('/:id/edit', (req,res)=>{
  var currentProducts = dbProducts.checkCollection();
  res.render('./templates/products/index', {productList:currentProducts});
});

router.post('/', function(req,res){
  var testNumber = Number(req.body.price);

  if(typeof req.body.name !== 'string' || req.body.price != testNumber || typeof req.body.inventory !== 'string'){

    res.redirect('/products/new');

  } else {
    var verifySuccess = dbProducts.createProduct(req.body);
    res.redirect('/products');
  }
});

router.put('/:id', function(req,res){
  var productId = req.params.id;
  req.body.id = productId;
  dbProducts.editProduct(req.body);
  res.redirect('/products/' + productId);
});

router.delete('/:id', function(req,res){
  var productId = req.params.id;
  req.body.id = productId;
  dbProducts.deleteProduct(req.body);
  res.redirect('/products/' + productId);
});

module.exports = router;