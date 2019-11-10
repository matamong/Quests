/**
 * Write a function called "getFirstElement". ("getFirstElement" 함수를 작성하세요.)

Given an array, "getFirstElement" returns the first element of the given array. (배열이 주어졌을때, "getFirstElement" 함수는 주어진 배열의 첫번째 요소를 반환해야 합니다.)

Notes:

If the given array has a length of 0, it should return undefined. (- 만약 배열의 길이가 0이라면, 'undefined'를 반환해야 합니다.)
let output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1
 */



























function getFirstElement(array) {
    if (array.length === 0) {
      return undefined
    }
    return array[0];
  }