function ipToNumber(ip = '127.0.0.1') {
    return ip
        .split('.')
        .map(Number)
        .reduce((acc, byte, index) => {
           
            const shifts = 3 - index;
           
            return acc + (byte << (shifts * 8));
        }, 0);
}

console.log(ipToNumber('10.0.0.1'));       
console.log(ipToNumber('127.0.0.1'));  
