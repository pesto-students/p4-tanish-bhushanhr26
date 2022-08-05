function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?




// Output will be count is 0 because of clousure.
//And there no logic to update message associated with count.
