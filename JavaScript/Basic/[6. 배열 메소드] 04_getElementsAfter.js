/**
 * Write a function called "getElementsAfter". ("getElementsAfter" 함수를 작성하세요.)

Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index. (배열과 인덱스가 주어졌을때, "getElementsAfter" 함수는 주어진 배열의 인덱스 이후 요소들을 (자신은 포함하지 않고) 새로운 배열로 반환해야 합니다.)

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output); // --> ['d', 'e']
 */




























function getElementsAfter(array, n) {
    let newArr = [];
    for (let i = n + 1; i < array.length; i++) {
      newArr.push(array[i]);
    }
    return newArr;
  }



  //or

  function getElementsAfter(array, n) {
    return array.slice(n+1);
  }
  