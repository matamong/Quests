/**
 * Write a function called "findMinLengthOfThreeWords". ("findMinLengthOfThreeWords" 함수를 작성하세요.)

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word. (단어 세개가 주어졌을때, "findMinLengthOfThreeWords" 함수는 세 단어 중 가장 짧은 단어의 길이를 반환합니다.)

let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
 */



























function findMinLengthOfThreeWords(word1, word2, word3) {
    let shortestLen = word1.length;
  
   // 첫 번 째 글자가 2번째 글자보다 길 때
    if (word1.length > word2.length) {
      shortestLen = word2.length
      // word 2 랑 word 3을 비교
      if (word2.length > word3.length) {
        shortestLen = word3.length
      }
    } else {
      // word1 과 word3 을 비교
      if (word1.length > word3.length) {
        shortestLen = word3.length
      }
    }
    return shortestLen
  }


  //or


  function findMinLengthOfThreeWords(word1, word2, word3) {
    return Math.min(word1.length,word2.length,word3.length);
  }