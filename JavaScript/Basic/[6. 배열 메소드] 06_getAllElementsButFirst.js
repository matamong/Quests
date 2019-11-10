/**
 * Write a function called "getAllElementsButFirst". ("getAllElementsButFirst" 함수를 작성하세요.)

Given an array, "getAllElementsButFirst" returns an array with all the elements but the first. (배열이 주어졌을때, "getAllElementsButFirst" 함수는 첫번째 요소를 제외한 배열을 반환해야 합니다.)

let input = [1, 2, 3, 4];
let output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]
 */



























function getAllElementsButFirst(array) {
    return array.slice(1, array.length);
  }


  //or

  function getElementsUpTo(array, n) {
    var removed = array.splice(n);
    return array;
  }