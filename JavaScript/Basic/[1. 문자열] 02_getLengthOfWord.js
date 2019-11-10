/**
 * Write a function called "getLengthOfWord". ("getLengthOfWord" 함수를 작성하세요.)

Given a word, "getLengthOfWord" returns the length of the given word. (단어가 주어졌을때, "getLengthOfWord" 함수는 단어의 길이를 반환해야 합니다.)

let output = getLengthOfWord('some');
console.log(output); // --> 4
 */





























function getLengthOfWord(word) {
    if (word) {
      return word.length;
    }
    return 0;
  }


  //or




  function getLengthOfWord(word) {
    return word.length;
  }
  

