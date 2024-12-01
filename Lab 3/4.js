function introspectObject(iface) {
    return Object.keys(iface) 
        .filter(key => typeof iface[key] === 'function') 
        .map(key => [key, iface[key].length]); 
}


const iface = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
};

console.log(introspectObject(iface)); 
