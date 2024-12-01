function contract(fn, ...types) {
    const returnType = types[types.length - 1];
    const argTypes = types.slice(0, -1);
    return function(...args) {
       
        if (args.length !== argTypes.length) {
            throw new TypeError(`Expected ${argTypes.length} arguments, got ${args.length}`);
        }

        for (let i = 0; i < args.length; i++) {
            if (!(args[i] instanceof argTypes[i]) && typeof args[i] !== argTypes[i].name.toLowerCase()) {
                throw new TypeError(`Argument ${i} must be of type ${argTypes[i].name}`);
            }
        }

        const result = fn(...args);

        if (!(result instanceof returnType) && typeof result !== returnType.name.toLowerCase()) {
            throw new TypeError(`Return value must be of type ${returnType.name}`);
        }

        return result;
    };
}
