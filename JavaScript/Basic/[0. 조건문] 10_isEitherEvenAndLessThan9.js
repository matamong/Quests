/**
 * Write a function called "isEitherEvenAndLessThan9". ("isEitherEvenAndLessThan9" 함수를 작성하세요.)

Given two numbers, 'isEitherEvenAndLessThan9' returns whether at least one of them is even, and, both of them are less than 9. (숫자 두개가 주어졌을때, 'isEitherEvenAndLessThan9' 함수는 2가지 조건을 검사합니다. 우선 두 숫자 중 적어도 하나가 짝수인지, 그리고 두 숫자 모두 9보다 작은지를 확인합니다. 두 조건을 모두 만족 했을 때만 true를 반환합니다.)

let output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true

let output = isEitherEvenAndLessThan9(72, 2);
console.log(output); // --> false
 */




























function isEitherEvenAndLessThan9(num1, num2) {
    if (num1 < 9 && num2 < 9) {
      if (num1 % 2 === 0 || num2 % 2 === 0) {
        return true;
      }
      return false;
    }
    return false;
  }