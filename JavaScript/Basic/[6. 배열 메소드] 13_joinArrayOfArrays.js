/**
 * 
Write a function called "joinArrayOfArrays". ("joinArrayOfArrays" 함수를 작성하세요.)

Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays. (배열들의 배열이 주어졌을때, "joinArrayOfArrays" 함수는 배열들의 요소를 모두 담고 있는 단일 배열을 반환합니다.)

let output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y'] * 
 */




















 


function joinArrayOfArrays(arr) {
    const joinedArr = arr.reduce(function(acc, val) {
      return acc.concat(val);
    });
    return joinedArr;
  }