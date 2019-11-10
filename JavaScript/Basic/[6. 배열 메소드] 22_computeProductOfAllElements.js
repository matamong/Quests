/**
 * Write a function called "computeProductOfAllElements". ("computeProductOfAllElements" 함수를 작성하세요.)

Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array. (숫자의 배열이 주어졌을때, "computeProductOfAllElements" 함수는 주어진 배열의 모든 요소의 곱을 반환합니다.)

Notes:

If given array is empty, it should return 0. (만약 빈 배열이 주어졌다면, 0을 반환해야 합니다.)
let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
 */






























function computeProductOfAllElements(arr) {
    if (arr.length === 0) {
      return 0;
    }
    return arr.reduce(function(acc, val) {
      return acc * val;
    });
  }