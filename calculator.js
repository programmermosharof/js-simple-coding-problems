// Step 1: Basic operation functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Step 2: Main calculator function - jekhane other functions call hobe
function calculator(num1, num2, operation) {
    if(operation === 'add') {
        const result = add(num1, num2);  // add function call
        return result;
    }
    else if(operation === 'subtract') {
        const result = subtract(num1, num2);  //  subtract function call
        return result;
    }
    else if(operation === 'multiply') {
        const result = multiply(num1, num2);  //  multiply function call
        return result;
    }
    else if(operation === 'divide') {
        const result = divide(num1, num2);  // divide function call
        return result;
    }
}

// Step 3: Calculator function ke call
const total = calculator(10, 5, 'multiply');
console.log(total);  // Output: 15





// ---

// ## Flow ta :
// ```
// calculator(10, 5, 'add') call → 
//     calculator function e gelo → 
//         if check korlo 'add' ache kina → 
//             add(10, 5) call korlo → 
//                 add function 10 + 5 = 15 return korlo → 
//                     calculator function 15 return korlo → 
//                         total = 15