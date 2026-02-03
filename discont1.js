function layeredDiscount(quantity) {
    const firstPrice = 100;
    const secondPrice = 90;
    const abovePrice = 70;

    if (quantity <= 100) {
        const total = quantity * firstPrice;
        return total;

    } else if (quantity <= 200) {
        const first100total = 100 * firstPrice;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * secondPrice;

        const total = first100total + remainingTotal;
        return total;

    } else {
        const first100total = 100 * firstPrice;
        const second100total = 100 * secondPrice;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * abovePrice;

        const total = first100total + second100total + remainingTotal;
        return total;
    }
}
console.log(layeredDiscount(50));    // only first layer
console.log(layeredDiscount(150));   // first + second layer
console.log(layeredDiscount(250));   // all three layers
// ================================================================================================================================================================================================================

function layeredDiscount(quantity) {
    let total = 0;

    if (quantity > 0) {
        let firstLayer = Math.min(quantity, 100);
        total += firstLayer * 100;
        quantity -= firstLayer;
    }

    if (quantity > 0) {
        let secondLayer = Math.min(quantity, 100);
        total += secondLayer * 90;
        quantity -= secondLayer;
    }

    if (quantity > 0) {
        total += quantity * 70;
    }

    return total;
}
console.log(layeredDiscount(50));   // 5000
console.log(layeredDiscount(150));  // 14500
console.log(layeredDiscount(250));  // 22500

