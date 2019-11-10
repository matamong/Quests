/**
 * Write a function called "getAllWords". ("getAllWords" 함수를 작성하세요.)

Given a sentence, "getAllWords" returns an array containing every word in the sentence. (문장이 주어졌을때, "getAllWords" 함수는 주어진 문장에 포함된 모든 단어를 담고 있는 배열을 반환합니다.)

Notes:

If given an empty string, it should return an empty array.
let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
 */























function getAllWords(str) {
    if (str === '') {
      return [];
    } else {
      return str.split(' ');
    }
  }



  //or

  function getAllWords(str) {
    return str.split(' ', str.length);
  }