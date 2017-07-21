/*jshint esversion: 6 */

const dbProducts = require('../db/products');

const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
  res.render('home');
});

router.post('/', function(req,res){

  var test = req.body;
  dbProducts.createProduct(req.body);
  var verifyProduct = dbProducts.checkCollection();
  console.log("verify", verifyProduct[0].name);

});

module.exports = router;