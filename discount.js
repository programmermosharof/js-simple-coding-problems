function discountedPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total ;
    }else if(quantity <= 200){
        const total = quantity * 90 ;
        return total;
    }else{
        const total = quantity * 70;
        return total;
    }
}

const total = discountedPrice(2);
console.log(total);


// layer discount

function layeredDiscount(quantity){
    const firstPrice = 100;
    const secondPrice = 90;
    const abovePrice = 70; 

    if(quantity <= 100){
        const total = quantity * firstPrice;
        return total;
    }else if (quantity <= 200){
        const first100total =  100 * firstPrice;
        const  remainingQuantity = quantity - 100;
        const remainingtotal = remainingQuantity * secondPrice;

        const total = first100total + remainingtotal;
        return total;
        
    }else{
        const first100total = 100 * firstPrice;
        const second100total = 100 * secondPrice;
        const remainingtotal = remainingQuantity * abovePrice;

        const total = first100total + second100total + remainingtotal;
        return total
    }
}
