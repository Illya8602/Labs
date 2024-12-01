function seq(...initialFns) {
  
    const fns = [...initialFns];
    
    function wrapper(...args) {
        
        if (args.length === 1 && typeof args[0] === 'number') {
            return fns.reduce((acc, fn) => fn(acc), args[0]);
        }
        
        fns.push(...args);
        
        return wrapper;
    }
    
    return wrapper;
}


console.log(
    seq(x => x + 7)
       (x => x * 2)(5)
); 

console.log(
    seq(x => x * 2)
       (x => x + 7)(5)
); 
console.log(
    seq(x => x + 1)
       (x => x * 2)
       (x => x / 3)
       (x => x - 4)(7)
); 
