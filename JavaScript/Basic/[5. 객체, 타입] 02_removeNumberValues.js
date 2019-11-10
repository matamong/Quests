/**
 * Write a function called "removeNumberValues". ("removeNumberValues" 함수를 작성하세요.)

Given an object, "removeNumberValues" removes any properties whose values are numbers. (객체가 주어졌을때, "removeNumberValues" 함수는 속성값이 숫자인 모든 속성을 제거합니다.)

let obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
 */


























function removeNumberValues(obj) {
    for (let prop in obj) {
      if (typeof obj[prop] === 'number') {
        delete obj[prop];
      }
    }
  }