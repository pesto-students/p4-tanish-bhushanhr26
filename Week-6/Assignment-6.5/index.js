function arrDifference(arr, B) {
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] == B) {
        return 1;
      }
    }
  }
  return 0;
}
console.log(arrDifference([5, 10, 3, 2, 50, 80], 78));
console.log(arrDifference([-10,20], 30));
