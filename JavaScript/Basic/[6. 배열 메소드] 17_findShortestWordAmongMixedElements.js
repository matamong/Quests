/**
 * Write a function called "findShortestWordAmongMixedElements". ("findShortestWordAmongMixedElements" 함수를 작성하세요.)

Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array. (배열이 주어졌을때, "findShortestWordAmongMixedElements" 함수는 주어진 배열에서 가장 짧은 문자열을 반환합니다.)

Notes:

If there are ties, it should return the first element to appear in the given array. (만약 동률이 있다면, 배열의 앞쪽에 있는 요소를 반환해야 합니다.)
Expect the given array to have values other than strings. (주어진 배열에는 문자열 외에 다른 값들이 있을 수 있습니다.)
If the given array is empty, it should return an empty string. (만약 빈배열이 주어졌다면, 빈 문자열을 반환해야 합니다.)
If the given array contains no strings, it should return an empty string. (만약 주어진 배열에 문자열이 없다면, 빈 문자열을 반환해야 합니다.)
let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
 */



























function findShortestWordAmongMixedElements(arr) {
    if (arr.length === 0) {
      return ''
    }
  
    return arr.reduce((acc, cur) => {
      if (typeof acc !== 'string') {
        if (typeof cur === 'string') {
          return cur
        }
        return ''
      }
  
      if (typeof cur === 'string') {
        if (cur.length < acc.length) {
          return cur
        }
        return acc
      }
      return acc
    })
  }