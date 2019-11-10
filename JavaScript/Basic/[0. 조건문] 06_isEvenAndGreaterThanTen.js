/**
 * Write a function called "isEvenAndGreaterThanTen". ("isEvenAndGreaterThanTen" 함수를 작성하세요.)

Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10. (숫자가 주어졌을때, "isEvenAndGreaterThanTen" 함수는 주어진 숫자가 10보다 크고 짝수인지 반환해야 합니다.)

let output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false
 */





















function isEvenAndGreaterThanTen(num) {
    if (num % 2 === 0 && num > 10) {
      return true;
    }
    return false;
  }