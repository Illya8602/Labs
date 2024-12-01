function average(a, b) {
   return (a + b) / 2;
}

function square(x) {
   return x * x;
}

function cube(x) {
   return x * x * x;
}

function calculate() {
    let results = [];
    for (let i = 0; i <= 9; i++) {
        let squared = square(i);      
         let cubed = cube(i);         
          let avg = average(squared, cubed); 
        results.push(avg);           
    }
    return results;
}

console.log(calculate());
