/**
 * Write a function called "getElementsUpTo". ("getElementsUpTo" 함수를 작성하세요.)

Given an array and a index, "getElementsUpTo", returns an array with all the elements up until, but not including, the element at the given index. (배열과 인덱스가 주어졌을때, "getElementsUpTo" 함수는 주어진 배열의 인덱스 이전 요소들을 (자신은 포함하지 않고) 새로운 배열로 반환해야 합니다.)

Notes:

In order to do this you should be familiar with the 'slice' method. (- 위 문제를 해결하기 위해서는 'slice' 메소드에 익숙하셔야 합니다.)
let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3);
console.log(output); // --> ['a', 'b', 'c']
 */































function getElementsUpTo(array, n) {
    return array.slice(0, n);
  }

  //or

  function getAllElementsButFirst(array) {
    var remove = [];
    remove = array.shift();
    return array;
  }
  
  