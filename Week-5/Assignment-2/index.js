function vowelCount(str) {
  let a = new Map();
  if (str.includes("aieou")) {
    for (let i = 0; i < str.length; i++) {
      console.log(str[i]);
    }
    a.set(str, str.length);
  }
  return a;
}
console.log(vowelCount("aieou"));
