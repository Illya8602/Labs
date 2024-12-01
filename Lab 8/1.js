function iterate(object, callback) {
    for (const [key, value] of Object.entries(object)) {
        callback(key, value, object);
    }
}

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
    console.log({ key, value });
});
