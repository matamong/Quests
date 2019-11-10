/**
 * Write a function called "getAllElementsButLast". ("getAllElementsButLast" 함수를 작성하세요.)

Given an array, "getAllElementsButLast" returns an array with all the elements but the last. (배열이 주어졌을때, "getAllElementsButLast" 함수는 마지막 요소를 제외한 배열을 반환해야 합니다.)

let input = [1, 2, 3, 4];
let output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]
 */




























function getAllElementsButLast(array) {
    return array.slice(0, array.length - 1);
  }


  //or
  function getAllElementsButLast(array) {
    array.pop();
    return array;
  }
  