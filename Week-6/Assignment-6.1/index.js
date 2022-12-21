function longestSubArray(arr) {
  let a = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.max(arr[i], arr[i] + arr[i - 1]);
    a = Math.max(a,arr[i])
  }
  return a
}
console.log(longestSubArray([1,2,3,4,-10]));
console.log(longestSubArray([-2,1,-3,4,-1,2,1,-5,4]));
