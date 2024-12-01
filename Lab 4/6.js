 function max(matrix) {
    let maxValue = -Infinity; 
    for (const row of matrix) {
        for (const num of row) {
            if (num > maxValue) {
                maxValue = num; 
            }
        }
    }
    return maxValue;
}
