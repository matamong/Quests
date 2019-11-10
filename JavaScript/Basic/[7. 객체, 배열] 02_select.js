/**
 * Write a function called "select". ("select" 함수를 작성하세요.)

Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array. (배열과 객체가 주어졌을때, "select" 함수는 주어진 객체의 키값 중 주어진 배열에 포함된 키값만을 속성으로 가지는 새로운 객체를 반환합니다.)

Notes:

If keys are present in the given array, but are not in the given object, it should ignore them. (만약 배열에는 있지만 객체에는 없는 키값이라면, 무시해야 합니다.)
It does not modify the passed in object. (주어진 객체가 변형되어서는 안됩니다.)
let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
 */






























function select(arr, obj) {
    let newObj = {};
    for (let prop in obj) {
      for (let i = 0; i < arr.length; i++) {
        if (prop === arr[i]) {
          newObj[prop] = obj[prop];
        }
      }
    }
    return newObj;
  }