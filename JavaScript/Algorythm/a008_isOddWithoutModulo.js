/**
 * Write a function called "isOddWithoutModulo". ("isOddWithoutModulo" 함수를 작성하세요.)

Given a number, "isOddWithoutModulo" returns whether the passed in number is odd. (숫자가 주어졌을때, "isOddWithoutModulo" 함수는 주어진 숫자가 홀수인지를 반환합니다.)

Note:

It does so without using the modulo operator (%). (- 나머지 연산자(%)를 사용하지 마세요.)
It should work for negative numbers and zero. (- 0과 음수가 주어져도 동작해야 합니다.)
let output = isOddWithoutModulo(17);
console.log(output); // --> true
 */
















 

function isOddWithoutModulo(num) {
    if (num === 0) {
      return false
    }
    if (num === 1 ) {
      return true
    }
    if (num < 0) {
      return isOddWithoutModulo((-num) - 2)
    }
    return isOddWithoutModulo(num - 2)
  }