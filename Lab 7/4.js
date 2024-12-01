function difference(array1, array2) {
    return array1.filter(item => !array2.includes(item));
}

const array1a = [7, -2, 10, 5, 0];
const array2a = [0, 10];
const result1 = difference(array1a, array2a);
console.log(result1); 

const array1b = ['Beijing', 'Kiev'];
const array2b = ['Kiev', 'London', 'Baghdad'];
const result2 = difference(array1b, array2b);
console.log(result2); 
