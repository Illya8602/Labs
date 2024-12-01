 function sumDoWhile(...args) {
    let total = 0;
    let i = 0;
    if (args.length === 0) return total; // Проверяем пустой массив
    do {
        total += args[i];
        i++;
    } while (i < args.length);
    return total;
}
