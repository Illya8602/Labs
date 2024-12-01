const mixedArray = [  true, 'hello', 5, 12, -200, false, false, 'word', null, undefined ];


const typeCount: Record<string, number> = {};

for (const item of mixedArray) {
    const type = item === null ? 'null' : 
                 Array.isArray(item) ? 'array' : 
                 typeof item;
    
    typeCount[type] = (typeCount[type] || 0) + 1;
}

console.log(typeCount);
