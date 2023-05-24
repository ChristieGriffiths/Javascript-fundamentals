/*
Implement the classes Candy and ShoppingBasket so you can require them into node and get the following behaviour:
> const candy = new Candy('Mars', 4.99);
> candy.getName();
'Mars'
> candy.getPrice();
4.99
> const basket = new ShoppingBasket();
> basket.getTotalPrice();
0
> basket.addItem(candy);
> basket.getTotalPrice();
4.99
> basket.addItem(new Candy('Skittle', 3.99));
> basket.addItem(new Candy('Skittle', 3.99));
> basket.getTotalPrice();
12.97
*/

class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

class ShoppingBasket {
  constructor() {
    this.basket = [];
  }
  
  addItem(candy) {
    this.basket.push(candy)
    return this.basket
  }

  getTotalPrice() {
    let price = 0;
    this.basket.forEach(object => {
      price += object.getPrice();
    });
    return price 
  }

}

const candy = new Candy('Mars', 4.99);
const decker = new Candy('Double Decker', 1);
const sweetBasket = new ShoppingBasket;
console.log(sweetBasket.getTotalPrice())
sweetBasket.addItem(candy)
sweetBasket.addItem(decker)


