/**
 * Write a function called "countCharacter". ("countCharacter" 함수를 작성하세요.)

Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string. (문자열과 문자가 주어졌을때, "countCharacter" 함수는 주어진 문자열에서 주어진 문자가 몇개가 있는지를 반환해야 합니다.)

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
 */




























function countCharacter(str, char) {
    let counter = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        counter = counter + 1;
      }
    }
  
    return counter;
  }