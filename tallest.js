// const number = [22, 45, 78, 90, 54, 67, 89, 99];

// function getMax(numbers){
//    let maxs = numbers[0];
//     for(const num of numbers){
//         if(num > maxs){
//           maxs = num ;
//         }
//     }
//    return maxs;
// }
// const max = getMax(number);
// console.log("Max value is :" , max);

const height  =  [23, 40, 54, 76, 88, 99, 199];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num ;
        }
    }

    return max;
}

const max = getMax(height);

console.log("max value is :", max);



const minheight  =  [23, 40, 54, 76, 88, 99, 199];

function getMax(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num ;
        }
    }

    return min;
}

const ma = getMax(minheight);

console.log("mini value is :", ma);