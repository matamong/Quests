/**
 * Write a function called "extend". ("extend" 함수를 작성하세요.)

Given two objects, "extend" adds properties from the 2nd object to the 1st object. (객체 두개가 주어졌을때, "extend" 함수는 두번째 객체의 속성을 첫번째 객체에 추가해야 합니다.)

Notes:

Add any keys that are not in the 1st object. (첫번째 객체에 없는 모든 키를 추가하세요.)
If the 1st object already has a given key, ignore it (do not overwrite the property value). (만약 첫번째 객체에 이미 있는 키라면, 값을 덮어쓰지 말고 무시하세요.)
Do not modify the 2nd object at all. (두번째 객체는 수정하지 마세요.)
let obj1 = {
  a: 1,
  b: 2
};
let obj2 = {
  b: 4,
  c: 3
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}
 */

























function extend(obj1, obj2) {
    for(let key in obj2) {
      if(!(key in obj1)) {
        obj1[key] = obj2[key];
      }
    }
  
    // 다른 솔루션
    // Object.assign(obj1, Object.assign({}, obj2, obj1));
  }