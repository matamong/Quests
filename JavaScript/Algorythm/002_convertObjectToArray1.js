/*
Write a function called "getAllKeys" which returns an array of all the input object's keys. (객체를 입력으로 받고 해당 객체의 키들을 배열로 반환하는 "getAllKeys" 함수를 작성하세요.)

Example input:

{
  name : 'Sam',
  age : 25,
  hasPets : true
}
Function's return value (output) :

['name', 'age', 'hasPets'];
Do not use "Object.keys" to solve this prompt. (이 문제를 풀기위해 "Object.keys"를 사용하지 마세요.)

Note that your function should be able to handle any object passed in it. (여러분이 작성한 함수는 어떠한 객체가 주어져도 처리가 가능해야 합니다.)

E.g. it should also handle an input like:

{
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
}
Function's return value (output):

['a', 'number', 'hungry', 'grammyWins'];
*/

function getAllKeys(obj) {
    let objectsKeys = [];
  
    for (let key in obj) {
      objectsKeys.push(key);
    }
  
    return objectsKeys;
  }