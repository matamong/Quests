/**
 * Write a function called "isOddLength". ("isOddLength" 함수를 작성하세요.)

Given a word, "isOddLength" returns whether the length of the given word is odd. (단어가 주어졌을때, "isOddLength" 함수는 주어진 단어의 길이가 홀수인지 반환해야 합니다.)

let output = isOddLength('special');
console.log(output); // --> true
 */






















function isOddLength(word) {
    if (word.length % 2 !== 0) {
      return true;
    }
    return false;
  }