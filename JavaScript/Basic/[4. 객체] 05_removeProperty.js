/**
 * Write a function called "removeProperty". ("removeProperty" 함수를 작성하세요.)

Given an object and a key, "removeProperty" removes the given key from the given object. (객체와 키가 주어졌을때, "removeProperty" 함수는 주어진 키에 해당하는 객체의 속성값을 제거해야 합니다.)

let obj = {
  name: 'Sam',
  age: 20
};
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined
 */


































function removeProperty(obj, propertyName) {
    delete obj[propertyName];
  }