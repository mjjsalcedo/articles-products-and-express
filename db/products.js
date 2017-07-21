/*jshint esversion: 6 */

let productCollection = [];

class Product {
  constructor(name, price, inventory){
    this.name = name;
    this.price = Number(price);
    this.inventory = inventory;
  }
}

function checkCollection(){
  return productCollection;
}

function createProduct(info){

  var product = new Product(info.name, info.price, info.inventory);
  console.log("dbprodcuts",product);
  productCollection.push(product);
  console.log(productCollection);
}

module.exports = {
  checkCollection: checkCollection,
  createProduct: createProduct,
};