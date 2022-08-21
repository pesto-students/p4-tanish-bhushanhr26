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