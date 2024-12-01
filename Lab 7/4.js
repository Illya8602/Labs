function difference(array1, array2) {
    return array1.filter(item => !array2.includes(item));
}

// Example usage:
const array1a = [3, -1, 9, 4, 7];
const array2a = [0, 10];
const result1 = difference(array1a, array2a);
console.log(result1);

const array1b = ['Australia', 'Bulgaria'];
const array2b = ['Brazil', 'Italy', 'Portugal'];
const result2 = difference(array1b, array2b);
console.log(result2); 
