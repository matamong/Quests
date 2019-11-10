/**
 * Write a function called "removeElement". ("removeElement" 함수를 작성하세요.)

Given an array of elements, and a "discarder" parameter, "removeElement" returns an array containing the items in the given array that do not match the "discarder" parameter. (배열과 "discarder" 매개변수가 주어졌을때, "removeElement" 함수는 주어진 배열에서 "discarder" 매개변수와 일치하지 않는 모든 요소를 포함하는 배열을 반환합니다.)

Notes:

If all the elements match, it should return an empty array. (만약 모든 요소와 일치한다면, 빈 배열을 반환해야 합니다.)
If an empty array is passed in, it should return an empty array. (만약 빈 배열이 주어진다면, 빈 배열을 반환해야 합니다.)
let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]
 */





























function removeElement(array, discarder) {
    return array.filter(function(el) {
      if (el !== discarder) {
        return true
      }
      return false
    })
  }