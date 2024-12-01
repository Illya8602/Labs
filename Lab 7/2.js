function removeElements(array, ...items) {
    for (const item of items) {
        let index;
        while ((index = array.indexOf(item)) !== -1) {
            array.splice(index, 1);
        }
    }
}
