/**
 * Write a function called "removeOddValues". ("removeOddValues" 함수를 작성하세요.)

Given an object, "removeOddValues" removes any properties whose values are odd numbers. (객체가 주어졌을때, "removeOddValues" 함수는 주어진 객체의 속성값이 홀수인 속성을 모두 제거합니다.)

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
 */
























function removeOddValues(obj) {
    for (let prop in obj) {
      if (obj[prop] % 2 !== 0) {
        delete obj[prop];
      }
    }
  }