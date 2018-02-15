const cars = require('./data/cars');
const cart = require('./cart')

describe('Cart Properties:', () => {
    test('Is cart an empty array?', () => {
        expect(Array.isArray(cart.cart)).toBe(true)
        expect(cart.cart.length).toBe(0)
    })

    test('Is total 0?', () => {
        expect(+cart.total).toBe(0)
    })

})

describe('Cart Methods:', () => {
    afterEach(function () {
        cart.cart = [];
        cart.total = 0;
    });

    test('addToCart needs to add 1 of a product to cart', () => {
        cart.addToCart(cars[0])
        cart.addToCart(cars[1])

        expect(cart.cart.length).toBe(2);
        expect(cart.cart[0]).toBe(cars[0]);
        expect(cart.cart[1]).toBe(cars[1]);
    })

    test('addToCart needs to increase total by price of product when added to cart', ()=>{
        cart.addToCart(cars[0]);

        expect(cart.total).toBe(8605);

        cart.addToCart(cars[1]);

        expect(cart.total).toBe(8605+48539);
    })

    test('removeFromCart should remove a car from cart and maintain order of cart', ()=>{
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);
        cart.addToCart(cars[3]);
        cart.addToCart(cars[4]);

        cart.removeFromCart(1, cars[2].price);

        expect(cart.cart.length).toBe(3);
        expect(cart.cart[0]).toBe(cars[1]);
        expect(cart.cart[1]).toBe(cars[3]);
        expect(cart.cart[2]).toBe(cars[4]);
    })
    
    test('removeFromCart should decrease total by price of car removed', ()=>{
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);
        cart.addToCart(cars[3]);
        cart.addToCart(cars[4]);
        
        cart.removeFromCart(1, cars[2].price);

        expect(cart.total).toBe(48539+38506+16179)
    })

    test('checkout should empty the cart and return total to 0', ()=>{
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);
        cart.addToCart(cars[3]);
        cart.addToCart(cars[4]);

        cart.checkout();

        expect(cart.total).toBe(0);
        expect(cart.cart.length).toBe(0);
    })
})