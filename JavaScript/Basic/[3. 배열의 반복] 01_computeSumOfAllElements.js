/**
 * Write a function called "computeSumOfAllElements". ("computeSumOfAllElements" 함수를 작성하세요.)

Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array. (숫자의 배열이 주어졌을때, "computeSumOfAllElements" 함수는 주어진 배열의 모든 요소의 합을 반환합니다.)

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
 */






























function computeSumOfAllElements(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }