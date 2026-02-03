const product = [
  { name: "shirt", price: 800, quantity: 1  },
  { name: "pant", price: 120, quantity: 2 },
  { name: "pant", price: 200,quantity: 3 },
  { name: "pant", price: 160, quantity: 4},
];

function getShopingTotal (products){
    let total = 0;
    for(let item of products){
        total = total + (item.price * item.quantity);
    }
    return total;
}
const all = getShopingTotal(product);
console.log("My all cost ", all);


