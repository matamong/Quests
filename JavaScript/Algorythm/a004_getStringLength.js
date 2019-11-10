/**
 * =Write a function called "getStringLength". ("getStringLength" 함수를 작성하세요.)

Given a string, "getStringLength" returns the length of the given string. (문자열이 주어졌을때, "getStringLength" 함수는 주어진 문자열의 길이를 반환합니다.)

Notes:

Do NOT use any native 'length' methods. (- 'length' 메소드를 사용하지 마세요.)
let output = getStringLength('hello');
console.log(output); // --> 5
 */
















function getStringLength(string) {
    let index = 0;
  
    while (string[index]) {
      index = index + 1;
    }
  
    return index;
  }