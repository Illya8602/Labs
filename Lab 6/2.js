class Compose {
  constructor(...fns) {
   
    const invalidArg = fns.find(fn => typeof fn !== 'function');
    if (invalidArg !== undefined) {
      throw new TypeError('All arguments to compose must be functions');
    }

    this.fns = fns;
    this.errorHandlers = [];
  }

  on(event, handler) {
    if (event === 'error') {
      this.errorHandlers.push(handler);
    }
    return this;
  }

  call(x) {
    try {
     
      return this.fns.reduceRight((acc, fn) => {
        try {
          return fn(acc);
        } catch (error) {
         
          this.errorHandlers.forEach(handler => handler(error));
         
          return undefined;
        }
      }, x);
    } catch (error) {
     
      this.errorHandlers.forEach(handler => handler(error));
      return undefined;
    }
  }
}


const compose = (...fns) => {
  const composedFn = new Compose(...fns);
  return composedFn.call.bind(composedFn);
};
