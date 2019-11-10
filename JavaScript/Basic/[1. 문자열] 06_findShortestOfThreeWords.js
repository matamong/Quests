/**
 * Write a function called "findShortestOfThreeWords". ("findShortestOfThreeWords" 함수를 작성하세요.)

Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings. (문자열 3개가 주어졌을때, "findShortestOfThreeWords" 함수는 주어진 문자열 중 가장 짧은 문자열을 반환해야 합니다.)

Notes:

If there are ties, it should return the first word in the parameters list. (만약 동률이 있다면, 그 중 앞에 있는 문자열을 반환해야 합니다.)
let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
 */




























function findShortestOfThreeWords(word1, word2, word3) {
    let shortestWord = word1
  
    // 첫 번 째 글자가 2번째 글자보다 길 때
    if (word1.length > word2.length) {
      shortestWord = word2
      // word 2 랑 word 3을 비교
      if (word2.length > word3.length) {
        shortestWord = word3
      }
    } else {
      // word1 과 word3 을 비교
      if (word1.length > word3.length) {
        shortestWord = word3
      }
    }
    return shortestWord
  }