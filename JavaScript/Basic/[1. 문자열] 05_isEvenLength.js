/**
 * Write a function called "isEvenLength". ("isEvenLength" 함수를 작성하세요.)

Given a word, "isEvenLength" returns whether the length of the word is even. (단어가 주어졌을때, "isEvenLength" 함수는 주어진 단어의 길이가 짝수인지 반환해야 합니다.)

let output = isEvenLength('wow');
console.log(output); // --> false
 */





























function isEvenLength(word) {
    if (word.length % 2 === 0) {
      return true;
    }
    return false;
  }