function sumReduce(...args) {
    return args.reduce((acc, num) => acc + num, 0);
}

console.log(sumFor(1, 2, 3)); 
console.log(sumForOf(0)); 
console.log(sumWhile()); 
console.log(sumDoWhile(1, -1, 1)); 
console.log(sumReduce(10, -1, -1, -1)); 
