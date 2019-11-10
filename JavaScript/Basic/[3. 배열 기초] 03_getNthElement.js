/**
 * Write a function called "getNthElement". ("getNthElement" 함수를 작성하세요.)

Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array. (배열과 숫자가 주어졌을때, "getNthElement" 함수는 주어진 배열에서 n번 인덱스의 요소를 반환해야 합니다.)

Notes:

If the array has a length of 0, it should return 'undefined'. (- 만약 배열의 길이가 0이라면, 'undefined'를 반환해야 합니다.)
let output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3
 * 
 */
































function getNthElement(array, n) {
    if (array.length > 0) {
      return array[n];
    }
    return undefined;
  }