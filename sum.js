function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid inputs, both arguments must be numbers');
    }
    return a + b;
}

const result = sum(5, 10);  
console.log('The sum of the numbers is:', result);

module.exports = sum;
