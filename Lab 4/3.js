 function sumWhile(...args) {
    let total = 0;
    let i = 0;
    while (i < args.length) {
        total += args[i];
        i++;
    }
    return total;
}
