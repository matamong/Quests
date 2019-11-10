/**
 * Write a function called "addToBack". ("addToBack" 함수를 작성하세요.)

Given an array and an element, "addToBack" returns the given array with the given element added to the end. (배열과 요소가 주어졌을때, "addToBack" 함수는 주어진 요소를 배열의 맨뒤에 추가하고 주어진 배열을 반환해야 합니다.)

Note: It should be the SAME array, not a new array. (새로운 배열이 아닌 같은 배열을 리턴해야합니다.)

let output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]
 */






























function addToBack(arr, element) {
    arr.push(element);
    return arr;
  }