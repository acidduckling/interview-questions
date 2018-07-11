// This is basically an example of currying

// Basic add function that will be passed to the currying function
const add = (a, b, c) => a + b + c;

// Will execute fn, and recursively return functions
// Can be called like this:
// const cuAdd = cu(add);
// cuAdd(1)(2)(3)
const cu = (fn) => {
  const nest = (index, args) => {
    return (...nestedArgs) => {
      if (index - nestedArgs.length <= 0) {
        return fn(...args, ...nestedArgs);
      }
      return nest(index - nestedArgs.length, [...args, ...nestedArgs]);
    };
  }
  return nest(fn.length, []);
}

const cuAdd = cu(add);

module.exports = cuAdd;