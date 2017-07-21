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
    var product = new Product(info.name, info.price, info.inventory);
    this.productList.push(product);
    var productIndex = this.productList.indexOf(product);
    var productId = this.productList[productIndex];
    productId.id = productIndex;
    console.log(this.productList);
  }

  editProduct(info){
    var test = info;
    console.log('test',test.id);
    var findItem = this.productList.filter(findItems);
    console.log("editProduct");

    console.log("findItem", findItem);
    if(findItem.length === 0){
      console.log("no item");
    }
    function findItems(item){
      if(item.id == test.id){
        return true;
      }
    }
  }
}


module.exports = new ProductCollection();