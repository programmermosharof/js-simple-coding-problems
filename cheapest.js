const mobile =[
    { name: "Sumsung", price: 15000 },
    { name: "Vivo", price: 5000 },
    { name: "Iphone", price: 150000 },
    { name: "Redmi", price: 18000 },
];

function cheapestPhone(phones){
    let min = phones[0];
    for(let phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}
const cheapest = cheapestPhone(mobile);
console.log("Chepeast Phone", cheapest);


const mobiles =[
    { name: "Sumsung", price: 15000 },
    { name: "Vivo", price: 5000 },
    { name: "Iphone", price: 150000 },
    { name: "Redmi", price: 18000 },
];

function cheapestPhones(phones){
    let max = phones[0];
    for(let phone of phones){
        if(phone.price > max.price){
            max = phone;
        }
    }
    return max;
}
const cheapest2 = cheapestPhones(mobiles);
console.log("expensive Phone", cheapest2);
