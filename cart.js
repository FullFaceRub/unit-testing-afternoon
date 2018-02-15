const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function(car) {
    this.cart.push(car);
    this.total+=car.price;
  },

  removeFromCart: function(ind, price) {
    this.cart.splice(ind,1);
    this.total-=price
  },
  
  checkout: function() {
    this.cart = [];
    this.total = 0;
  }
};