/**
 * addPropertyAndValue 함수를 작성하세요
파라미터로 객체와 키 및 새로운 값을 받는 addPropertyAndValue 함수가 있습니다. 이 함수는 주어진 객체에, 키 이름으로 속성을 만들고 값을 설정합니다.

let steve = {};
addPropertyAndValue(steve, 'isMale', true);
console.log(steve.isMale); // --> true

addPropertyAndValue(steve, 'age', 30);
console.log(steve.age); // --> 30

let jessica = {};
addPropertyAndValue(jessica, 'job', 'Programmer');
console.log(jessica.job); // --> 'Programmer'
 */





























function addPropertyAndValue(obj, propertyName, value) {
    obj[propertyName] = value;
  }