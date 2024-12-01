const pipe = (...fns) => {
 
  const invalidArg = fns.find(fn => typeof fn !== 'function');
  
  if (invalidArg !== undefined) {
    throw new TypeError('All arguments to pipe must be functions');
  }

  return (x) => {
   
    return fns.reduce((acc, fn) => fn(acc), x);
  };
};
