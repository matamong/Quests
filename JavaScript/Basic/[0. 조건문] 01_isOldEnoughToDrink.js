/**
 * isOldEnoughToDrink 함수를 작성하세요
어떤 숫자, 이 경우에는 연령이 하나 주어졌을 때, isOldEnoughToDrink 함수는 주어진 연령의 사람이 미국에서 합법적으로 술을 마실 수 있는지의 여부를 반환해야 합니다.

참고:

미국에서 술을 마실 수 있는 나이는 21세 이상입니다.
let output = isOldEnoughToDrink(22);
console.log(output); // --> true
 */

























function isOldEnoughToDrink(age) {
    if (age >= 21) {
      return true;
    } else {
      return false;
    }
  }