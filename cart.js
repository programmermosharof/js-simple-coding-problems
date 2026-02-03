

const shop = [
   { name: "shirt", price: 600, quantity: 2 },
   { name: "pant", price: 800, quantity: 2 },
   { name: "pen", price: 50, quantity: 2 },
   { name: "teshirt", price: 120, quantity: 2 },
];

function shopping(cart) {
    let total = 0;

    for (const item of cart) {
        total = total + item.price ;
    }

    return total;
}

const totalCost = shopping(shop);
console.log("Total:", totalCost);
