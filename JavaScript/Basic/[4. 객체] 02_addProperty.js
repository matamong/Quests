/**
 * addProperty 함수를 작성하세요
파라미터로 객체와 키를 받는 addProperty 함수가 있습니다. 이 함수는 주어진 객체에, 키 이름으로 속성을 만들고 값을 true로 설정합니다.

let steve = {};
addProperty(steve, 'isMale');
console.log(steve.isMale); // --> true

addProperty(steve, 'isProgrammer');
console.log(steve.isProgrammer); // --> true

let jessica = {};
addProperty(jessica, 'isSmart');
console.log(jessica.isSmart); // --> true
 */





























function addProperty(obj, propertyName) {
    obj[propertyName] = true;
  }