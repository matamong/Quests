/**
 * Write a function called "addToFrontOfNew". ("addToFrontOfNew" 함수를 작성하세요.)

Given an array and an element, "addToFrontOfNew" returns a new array containing all the elements of the given array, with the given element added to the front. (배열과 요소가 주어졌을때, "addToFrontOfNew" 함수는 주어진 요소가 맨앞에 있고 기존 배열의 요소를 모두 담고 있는 새로운 배열을 반환합니다.)

Important: It should be a NEW array instance, not the original array instance.

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); --> [3, 1, 2];
console.log(input); --> [1, 2]
 */




























function addToFrontOfNew(arr, element) {
    const newArray = arr.slice();
    newArray.unshift(element);
    return newArray;
  }