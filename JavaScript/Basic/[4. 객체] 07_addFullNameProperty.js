/**
 * Write a function called "addFullNameProperty". ("addFullNameProperty" 함수를 작성하세요.)

Given an object that has a "firstName" property and a "lastName" property, "addFullNameProperty" returns a "fullName" property whose value is a string with the first name and last name separated by a space. ("firstName"과 "lastName" 속성을 가지고 있는 객체가 주어졌을때, "addFullNameProperty" 함수는 이름과 성이 띄어쓰기 하나를 사이에 둔 단일 문자열 "fullName" 속성을 설정해야 합니다.)

let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'
 */
































function addFullNameProperty(obj) {
    obj.fullName = obj.firstName + ' ' + obj.lastName;
  }