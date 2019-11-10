/**
 * Write a function called "findSmallestElement". ("findSmallestElement" 함수를 작성하세요.)

Given an array of numbers, "findSmallestElement" returns the smallest number within the given array. (숫자의 배열이 주어졌을때, "findSmallestElement" 함수는 주어진 배열에서 가장 작은 수를 반환합니다.)

Notes:

If the given array is empty, it should return 0. (만약 빈 배열이 주어졌다면, 0을 반환해야 합니다.)
let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
 */





























function findSmallestElement(arr) {
    if (arr.length === 0) return 0;
    return arr.reduce(function(a, b) {
      return Math.min(a,b);
    });
  }