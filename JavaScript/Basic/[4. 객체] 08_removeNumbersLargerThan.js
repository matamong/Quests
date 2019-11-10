/**
 * Write a function called "removeNumbersLargerThan". ("removeNumbersLargerThan" 함수를 작성하세요.)

Given a number and an object, "removeNumbersLargerThan" removes any properties whose values are numbers greater than the given number. (숫자와 객체가 주어졌을때, "removeNumbersLargerThan" 함수는 주어진 객체에서 주어진 숫자보다 큰 모든 숫자 속성을 제거합니다.)

let obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }
 */




























function removeNumbersLargerThan(num, obj) {
    for (let prop in obj) {
      if (obj[prop] > num) {
        delete obj[prop];
      }
    }
    return obj;
  }