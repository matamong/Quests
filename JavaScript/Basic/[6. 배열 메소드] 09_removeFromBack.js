/**
 * Write a function called "removeFromBack". ("removeFromBack" 함수를 작성하세요.)

Given an array, "removeFromBack" returns the given array with its last element removed. (배열이 주어졌을때, "removeFromBack" 함수는 마지막 요소를 삭제한 주어진 배열을 반환해야 합니다.)

Notes:

You should be familiar with the method 'pop'. (- 위 문제를 해결하기 위해서는 'pop' 메소드에 익숙하셔야 합니다.)
let output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]
 */


























function removeFromBack(arr) {
    arr.pop();
    return arr;
  }