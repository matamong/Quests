/**
 * Write a function called "removeStringValues". ("removeStringValues" 함수를 작성하세요.)

Given an object, "removeStringValues" removes any properties on the given object whose values are strings. (객체가 주어졌을때, "removeStringValues" 함수는 속성값이 문자열인 모든 속성을 제거합니다.)

let obj = {
  name: 'Sam',
  age: 20
}
removeStringValues(obj);
console.log(obj); // { age: 20 }
 */




























function removeStringValues(obj) {
    for (let prop in obj) {
      if (typeof obj[prop] === 'string') {
        delete obj[prop];
      }
    }
  }