/**
 * Write a function called "modulo". ("modulo" 함수를 작성하세요.)

Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2. (두 숫자가 주어졌을때, "modulo" 함수는 첫번째 수를 두번째 수로 나눴을때 나머지 값을 반환합니다.)

It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator: (아래 문서에서 설명된 자바스크립트의 나머지 연산자 처럼 동작해야 합니다.) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/ArithmeticOperators#Remainder()

Notes:

Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation. (- 이미 구현되어 있는 나머지 연산자(%)를 사용하지 마세요.)
0 % ANYNUMBER = 0. (- 0 & 아무숫자 = 0)
ANYNUMBER % 0 = NaN. (- 아무숫자 % 0 = NaN)
If either operand is NaN, then the result is NaN. (- 두 수중 하나라도 NaN 이라면, 결과값은 NaN 입니다.)
Modulo always returns the sign of the first number. (modulo 함수는 항상 첫번째 숫자의 +/- 값을 반환합니다.)
let output = modulo(25, 4);
console.log(output); // --> 1
 */








 



function modulo(num1, num2) {
    if (isNaN(num2) || num2 === 0) {
      return NaN;
    }
  
    let plusMinus = num1 > 0 ? 1 : -1;
  
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
  
    while (num1 >= num2) {
      num1 = num1 - num2;
    }
    return num1 * plusMinus;
  }