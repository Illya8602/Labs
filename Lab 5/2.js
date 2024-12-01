function array() {
   
    const items = [];
    
    function wrapper(index) {
        
        return items[index];
    }
    
    wrapper.push = function(value) {
        items.push(value);
    };
    
    wrapper.pop = function() {
        return items.pop();
    };
    
    return wrapper;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); 
console.log(arr(1)); 
console.log(arr(2)); 

console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop()); 
