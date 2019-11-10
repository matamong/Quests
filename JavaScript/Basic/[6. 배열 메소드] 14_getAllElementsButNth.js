/**
 * Write a function called "getAllElementsButNth". ("getAllElementsButNth" 함수를 작성하세요.)

Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth. (배열과 인덱스가 주어졌을때, "getAllElementsButNth" 함수는 해당 인덱스의 요소를 제외한 배열을 반환합니다.)

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
 */




























function getAllElementsButNth(array, n) {
    let result = []
    
    for (let i = 0; i < array.length; i++) {
      if (i !== n) {
        result.push(array[i])
      }
    }
  
    return result;
  }