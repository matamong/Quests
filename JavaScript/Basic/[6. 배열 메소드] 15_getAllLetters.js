/**
 * Write a function called "getAllLetters". ("getAllLetters" 함수를 작성하세요.)

Given a word, "getAllLetters" returns an array containing every character in the word. (단어가 주어졌을때, "getAllLetters" 함수는 주어진 단어에 포함된 모든 문자를 담고 있는 배열을 반환합니다.)

Notes:

If given an empty string, it should return an empty array. (만약 빈 문자열이 주어졌다면, 빈 배열을 반환해야 합니다.)
let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
 */




























function getAllLetters(str) {
    return str.split('');
  }