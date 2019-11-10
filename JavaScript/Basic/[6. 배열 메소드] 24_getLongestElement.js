/**
 * Write a function called "getLongestElement". ("getLongestElment" 함수를 작성하세요.)

Given an array, "getLongestElement" returns the longest string in the given array. (배열이 주어졌을때, "getLongestElement" 함수는 주어진 배열에서 가장 긴 문자열을 반환합니다.)

Notes:

If there are ties, it returns the first element to appear. (만약 동률이 있다면, 앞쪽에 있는 요소를 반환해야 합니다.)
If the array is empty, it should return an empty string. (만약 배열이 비어있다면, 빈 문자열을 반환해야 합니다.)
let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
 */




























function getLongestElement(arr) {
    if (arr.length === 0) {
      return ''
    }
  
    return arr.reduce(function(a, b) {
      if (a.length >= b.length) {
        return a;
      } else {
        return b;
      }
    });
  }