/*
    JavaScript ES5 sucks
*/

// 01 weak type
var a = "123";
a = [1,2,3];
console.log(a);

//question: how to make variable 'a' unchangeable?

// 02 JavaScript types:
// Number, Object, String, Boolean, null, undefined
// typeof

// 03 tricky things about == and ===


// 04 variable hoisting
console.log(b);
var b = "hello world";
// question: how to fix it?

// 05 tricky part of "var"

var array = [1, 3, 5, 7, 9];

for (var i = 0; i < array.length; i++) {
    console.log(i, array[i]);
}
// console.log(i); ?
// pollution of global 
// how to fix this ?



