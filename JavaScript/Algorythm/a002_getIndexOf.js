/**
 * Write a function called "getIndexOf". ("getIndexOf" 함수를 작성하세요.)

Given a character and a string, "getIndexOf" returns the first position of the given character in the given string. (문자와 문자열이 주어졌을때, "getIndexOf" 함수는 주어진 문자열에서 주어진 문자가 나타나는 첫번째 위치를 반환합니다.)

Notes:

Strings are zero indexed, meaning the first character in a string is at position 0. (- 문자열의 첫번째 문자는 인덱스 값 0 을 가집니다.)
When a string contains more than one occurrence of a character, it should return the index of its first occurrence. (- 만약 문자열에 해당 문자가 여러번 나타나면, 첫번째로 나타나는 위치를 반환해야 합니다.)
If the character does not exist in the string, it should return -1. (- 만약 문자가 문자열에 존재하지 않는다면, -1 을 반환해야 합니다.)
Do not use the native indexOf function in your implementation. (- indexOf 함수를 사용하지 마세요.)
let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2
 * 
 */











function getIndexOf(char, str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        return i;
      }
    }
    return -1
  }