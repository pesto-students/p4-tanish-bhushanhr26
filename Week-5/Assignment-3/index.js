function hasDuplicate(arr) {
  new Set(arr).size !== arr.length ? console.log(false) : console.log(true);
}
console.log(hasDuplicate([1, 2, 3]));
