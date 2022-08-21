// // generator function
// function* generatorFunc() {

//     console.log("1. code before the first yield");
//     yield 100;

//    console.log("2. code before the second yield");
//     yield 200;
// }

// // returns generator object
// const generator = generatorFunc();

// console.log(generator.next());
// console.log(generator.next());


function* generator() {
  yield doTask1();
  yield doTask2();
  yield doTask3();
}
function doTask1(){
    console.log("hello");
}
function doTask2(){
    console.log("hey");
}
function doTask3(){
    console.log("hi");
}
let x = generator()
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());