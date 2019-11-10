/**
 * Write a function called "removeFromFront". ("removeFromFront" 함수를 작성하세요.)

Given an array, "removeFromFront" returns the given array with its first element removed. (배열이 주어졌을때, "removeFromFront" 함수는 첫번째 요소를 삭제한 주어진 배열을 반환해야 합니다.)

Notes:

You should be familiar with the method 'shift'. (- 위 문제를 해결하기 위해서는 'shift' 메소드에 익숙하셔야 합니다.)
let output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]
 */

























function removeFromFront(arr) {
    arr.shift();
    return arr;
  }