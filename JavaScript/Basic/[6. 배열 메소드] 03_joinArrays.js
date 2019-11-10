/**
 * Write a function called "joinArrays". ("joinArrays" 함수를 작성하세요.)

Given two arrays, "joinArrays" returns an array with the elements of "arr1" in order, followed by the elementsin "arr2". (두 배열이 주어졌을때, "joinArrays" 함수는 첫번째 배열(arr1)과 두번째 배열(arr2) 순서로 합쳐진 배열을 반환해야 합니다.)

let output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
You should be familiar with the "concat" method for this problem. (위 문제를 해결하기 위해서는 "concat" 메소드에 익숙하셔야 합니다.)
 */




























function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }