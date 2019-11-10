/**
 * Write a function called "keep". ("keep" 함수를 작성하세요.)

Given an array and a keeper element, "keep" returns an array containing the items that match the given keeper element. (배열과 "keeper" 매개변수가 주어졌을때, "keep" 함수는 "keeper" 매개변수와 일치하는 모든 요소를 포함하는 배열을 반환합니다.)

Notes:

If no elements match, "keep" should return an empty array. (만약 아무것도 일치하지 않는다면, "keep" 함수는 빈 배열을 반환해야 합니다.)
let output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); --> [2, 2]
 */




























function keep(array, keeper) {
    return array.filter(function(el) {
      if (el === keeper) {
        return true
      }
      return false
    })
  }