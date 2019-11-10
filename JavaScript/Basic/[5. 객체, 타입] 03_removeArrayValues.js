/**
 * Write a function called "removeArrayValues". ("removeArrayValues" 함수를 작성하세요.)

Given an object, "removeArrayValues" removes any properties whose values are arrays. (객체가 주어졌을때, "removeArrayValues" 함수는 속성값이 배열인 모든 속성을 제거합니다.)

let obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }
 */

























function removeArrayValues(obj) {
    for (let prop in obj) {
      if (Array.isArray(obj[prop])) {
        delete obj[prop];
      }
    }
  }