const mosharof = 70;

const rakib = 65;

if(mosharof > rakib){
    console.log("Mosharof tumi onek valo mark paiso very good");
}else{
    console.log("Rakib tumi temon valo marks pao nai ");
}

function getMax(num1 , num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}
const max1 = getMax(40, 90);
const max2 = getMax(85, 98);
const allMax = getMax(max1, max2)
console.log("Max of tow is:", allMax);


let math = 770;

let english = 80;

let bangla = 300;

if(math > english && math > bangla){
    console.log( "tumi onek valo math bujo" );
}
else if(english > math && english > bangla){
    console.log("Wow tumi onek valo english par");
} else{
    console.log("king for bangla");
}


function whoIsKIng(Mosharof, Rakib, Fahim){
    if(Mosharof > Rakib && Mosharof > Fahim){
        return "Mosharof is the boss";
    }else if(Rakib > Mosharof && Rakib > Fahim){
        return "Rakib is king in USA";
    }else{
        return "Fahim is the for Friend"
    }
}

console.log(whoIsKIng(50, 100, 53,));

const weghit = Math.max(100, 234, 455, 64, 67);

console.log("max is max", weghit);