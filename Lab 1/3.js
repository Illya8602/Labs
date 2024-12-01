function inc(n: number): number {
    return n + 1;
}

function inc(num: { n: number }): void {
    num.n += 1;
}

const a = 5;
const b = inc(a);
console.dir({ a, b });  // { a: 5, b: 6 }

const obj = { n: 5 };
inc(obj);
console.dir(obj);  // { n: 6 }
