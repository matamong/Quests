/**
 * Write a function called "computeAverageLengthOfWords". ("computeAverageLengthOfWords" 함수를 작성하세요.)

Given two words, "computeAverageLengthOfWords" returns the average of their lengths. (두 단어가 주어졌을때, "computeAverageLengthOfWords" 함수는 두 단어 길이의 평균값을 반환합니다.)

let output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6
 */




























function computeAverageLengthOfWords(word1, word2) {
    return (word1.length + word2.length) / 2;
  }