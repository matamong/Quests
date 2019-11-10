/**
 * Write a function called "filterOddLengthWords". ("filterOddLengthWords" 함수를 작성하세요.)

Given an array of string, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers. (문자열의 배열이 주어졌을때, "filterOddLengthWords" 함수는 주어진 배열의 요소 중 문자열의 길이가 홀수인 문자열만을 요소로 가지는 배열을 반환합니다.)

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']
 */





























function filterOddLengthWords(words) {
    return words.filter(function(el) {
      return el.length % 2 !== 0;
    })
  }