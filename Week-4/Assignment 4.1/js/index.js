function getNumber() {
  let x = Math.random();
  let y = x.toFixed(2)
  return new Promise(function (resolve, reject) {
    if (y/5===0) {
      reject("It is Divisible by 5");
      return;
    }

    resolve(y);
  });
}
getNumber()
  .then(function (result) {
    console.log(`success ${result}`);
  })
  .catch(function (error) {
    console.log("error");
    console.log(error);
  });
