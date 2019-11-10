/**Write a function called "isGreaterThan". ("isGreaterThan" 함수를 작성하세요.)

Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1. (두 숫자가 주어졌을때, "isGreaterThan" 함수는 두번째 숫자(num2)가 첫번째 숫자(num1)보다 큰지 반환해야 합니다.)

let output = isGreaterThan(11, 10);
console.log(output); // --> false
 * 
 */
























function isGreaterThan(num1, num2) {
    if (num1 < num2) {
      return true;
    }
    return false;
  }