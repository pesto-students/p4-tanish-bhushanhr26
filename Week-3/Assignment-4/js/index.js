function createStack() {
  return {
    items: [],
    push(items) {
      return this.items.push(items);
    },
    pop() {
      return this.items.pop();
    },
  };
}
const stack = createStack();

console.log(stack.push(10));
console.log(stack.push(5));
console.log(stack.pop())
console.log(stack.items)
console.log(stack.items = [10,100,1000])



// 1. Code was not working before because push function was not returning anything.Code
// 2. Now code is working because I added return statement there so while passing the argument push function will return the stack Value.
