/*
    JavaScript CallStack 
    Task Queue 
    EventLoop 
*/

// function func1() {
//     console.log('in function1');
// }

// function func2() {
//     func1();
//     console.log('in function2');
// }

// function func3() {
//     func2();
//     console.log('in function3');
// }

// func3();


// console.log("12345");
// setTimeout(function(){
//     console.log('上山打老虎');
// }, 1500);
// console.log("6789");


console.log("12345");
setTimeout(function(){
    console.log('上山打老虎');
}, 0);
function sleep(str) {
    return new Promise(function(resolve, reject) {
        resolve(str);
    });
}
sleep("我也是个异步呀").then( (data)=> console.log(data));
console.log("6789");
