/**
 * Write a function called "addToFront". ("addToFront" 함수를 작성하세요.)

Given an array and an element, "addToFront" adds the given element to the front of the given array, and returns the given array. (배열과 요소가 주어졌을때, "addToFront" 함수는 주어진 요소를 배열의 맨앞에 추가하고 주어진 배열을 반환해야 합니다.)

Notes:

It should be the SAME array, not a new array. (새로운 배열이 아닌 같은 배열을 리턴해야합니다.)
let output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]
 */




























function addToFront(arr, element) {
    arr.unshift(element);
    return arr;
  }