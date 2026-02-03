let bedWood = 15;
let totalBed = 3;

console.log(bedWood * totalBed);

// task 2
let door = 8;
let totalDoor = 5;

let doorWood = door * totalDoor;
let window = 5;
let totalWindo = 4;

let allwindo = window * totalWindo;

let all = doorWood + allwindo;

console.log("total wood ",all);



function woodQuantity (chair, table, bed, door){
    let chairWood = 3;
    let tableWood = 10;
    let bedWood = 15;
    let doorWood= 8;

    let totalChair = chair * chairWood;
    let totaltable = table * tableWood;
    let totalBed = bed * bedWood;
    let totaldoor = door * doorWood;

    const totalWood = totalChair + totaltable + totalBed + totaldoor;
    return totalWood;
}

const wood = woodQuantity(0, 0, 5, 4);
console.log("Total",wood);


function calculatWood(perItem, count ){
    return perItem * count;
}
let doorWoods = calculatWood(8, 5);

let windowWood = calculatWood(5, 4)
let shirtPrice = calculatWood(400, 5)

let allWood = doorWoods + windowWood + shirtPrice;
console.log("total tk",shirtPrice);
console.log("Total",allWood);








