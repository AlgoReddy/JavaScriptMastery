// class = (ES6 feature)  provides a more structured  and cleaner way to work with objects compared to tradtional
//         constructor functions
//          ex:static  ,encapsulation  , inheritance

class Product {
  constructor(price, name) {
    this.price = price;
    this.name = name;
  }
  displayProduct() {
    console.log(
      `product name is ${this.name} & price of that item ${this.price} ruppees `
    );
  }
}
const product = new Product(899898, "Honda Unicorn");
product.displayProduct();
