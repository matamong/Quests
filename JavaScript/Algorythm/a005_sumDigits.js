/**
 * Write a function called "sumDigits". ("sumDigits" 함수를 작성하세요.)

Given a number, "sumDigits" returns the sum of all its digits. (숫자가 주어졌을때, "sumDigits" 함수는 숫자의 각 자리수를 모두 더한 값을 반환합니다.)

let output = sumDigits(1148);
console.log(output); // --> 14
If the number is negative, the first digit should count as negative. (만약 숫자가 음수라면, 첫번째 자릿수는 음수로 고려되어야 합니다.)

let output = sumDigits(-316);
console.log(output); // --> 4
Notes:

In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa. (- 여러분에게 도움이 될 메소드를 사용하기위해서는 아마도 문자열을 숫자로 바꾸거나 숫자를 문자로 바꾸는게 수월하실 겁니다.)
Be sure to familiarize yourself with the "toString" method, as well as the "Number" function. ("Number" 함수와 "toString" 메소드에 꼭 익숙해지세요.)
 */














 
function sumDigits(num) {
    let sum = 0;
    let stringNumArr = num.toString().split('');
  
    for (let i = 0; i < stringNumArr.length; i++) {
      if (stringNumArr[0] === '-' && i === 1) {
        sum = sum - Number(stringNumArr[1]);
      } else if (stringNumArr[i] !== '-') {
        sum = sum + Number(stringNumArr[i]);
      }
    }
  
    return sum;
  }