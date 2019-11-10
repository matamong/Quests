/**
 * Write a function called "multiplyBetween". ("multiplyBetween" 함수를 작성하세요.)

Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2. (두 정수가 주어졌을때, "multiplyBetween" 함수는 첫번째 숫자부터 두번째 숫자 전까지 모든 수를 곱한 값을 반환합니다.)

Notes:

The product between 1 and 4 is 1 2 3 = 6. (1과 4 사이의 곱은 1 2 3 = 6 입니다.)
If num2 is not greater than num1, it should return 0. (만약 두번째 숫자가 첫번째 숫자보다 작다면, 0을 반환해야 합니다.)
let output = multiplyBetween(2, 5);
console.log(output); // --> 24
 */































function multiplyBetween(num1, num2) {
    if (num2 <= num1) {
      return 0
    }
    
    let result = 1
  
    for (let i = num1; i < num2; i++) {
      result = result * i
    }
  
    return result
  }