// case1:
// function sqrt(arg) {
//   if (!sqrt.cache) {
//     sqrt.cache = {};
//   }
//   if (!sqrt.cache[arg]) {
//     return (sqrt.cache[arg] = Math.sqrt(arg));
//   }
//   return sqrt.cache[arg];
// }

// function square(num) {
//   return num * num;
// }
// We can memoize this function like this:
// case2:
// function square(num) {
//   if (!square.cache) {
//     square.cache = {};
//   }
//   if (!square.cache[num]) {
//     return (square.cache[num] = num * num);
//   }
//   return square.cache[num];
// }
// console.log(square(4));
// console.log(square.cache);
// console.log(square(9));
// console.log(square.cache);
// console.log(square(4));
// console.log(square.cache);
// console.log(square(16));
// console.log(square.cache);
// case3: 单独创建一个memorize函数
// function memoize(fn) {
//   return function() {
//     var args = Array.prototype.slice.call(arguments);
//     // console.log(args);
//     fn.cache = fn.cache || {};
//     // console.log(fn.cache);
//     return fn.cache[args]
//       ? fn.cache[args]
//       : (fn.cache[args] = fn.apply(this, args));
//   };
// }
// function sqrt(arg) {
//   return Math.sqrt(arg);
// }
// const memoizedSqrt = memoize(sqrt);
// console.log(memoizedSqrt(4)); // 2 calculated
// console.log(memoizedSqrt(4)); // 2 cached
// console.log(memoizedSqrt(9)); // 3 calculated
// console.log(memoizedSqrt(9)); // 3 cached
// memoizedSqrt(25); // 5 calculated
// memoizedSqrt(25); // 5 cached

// We can add the memoize function to the Function prototype
// so that every function defined in our apps inherits the
// memoize function and can call it.
Function.prototype.memoize = function () {
  var self = this;
  return function () {
    var args = Array.prototype.slice.call(arguments);
    self.cache = self.cache || {};
    return self.cache[args]
      ? self.cache[args]
      : (self.cache[args] = self(args));
  };
};
function sqrt(arg) {
  // console.log("出现这一行，说明没有被缓存命中");
  return Math.sqrt(arg);
}
const memoizedSqrt = sqrt.memoize();
console.time("非缓存：");
console.log(memoizedSqrt(4));
console.log(memoizedSqrt(9));
console.log(memoizedSqrt(16));
console.timeEnd("非缓存：");
console.time("缓存：");
console.log(memoizedSqrt(4));
console.log(memoizedSqrt(16));
console.log(memoizedSqrt(9));
console.timeEnd("缓存：");
// 对于缓存最适合的场景就是pure function，给定输入，给定的输出
