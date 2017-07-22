/*jshint esversion: 6 */

class Product {
  constructor(name, price, inventory){
    this.name = name;
    this.price = Number(price);
    this.inventory = inventory;
  }
}

class ProductCollection {

  constructor(){
    this.productList = [];
  }

  checkCollection(){
    return this.productList;
  }

  createProduct(info){
    var test = info.id;
    var product = new Product(info.name, info.price, info.inventory);
    this.productList.push(product);
    var productIndex = this.productList.indexOf(product);
    var productId = this.productList[productIndex];
    productId.id = productIndex;
    console.log(this.productList);
  }

  editProduct(info){
    var verifyInfo = info;
    var findItem = this.productList.filter(findItems);
    var productIndex = this.productList.indexOf(findItem[0]);
    var productId = this.productList[productIndex];
    var revisedProduct = new Product(info.name, info.price, info.inventory);
    revisedProduct.id = findItem[0].id;

    if(findItem.length === 0){
      console.log('item does not exist');
    } else {
      this.productList.splice(productIndex, 1, revisedProduct);
      return revisedProduct;
    }

    function findItems(item){
      if(item.id == verifyInfo.id){
        return true;
      }
    }
  }

  deleteProduct(info){
    var verifyInfo = info;
    var findItem = this.productList.filter(findItems);
    var productIndex = this.productList.indexOf(findItem[0]);
    var productId = this.productList[productIndex];

    if(findItem.length === 0){
      console.log('item does not exist');
    } else {
      this.productList.splice(productIndex, 1);
      console.log(this.productList);
    }

    function findItems(item){
      if(item.id == verifyInfo.id){
        return true;
      }
    }
  }
}


module.exports = new ProductCollection();