/**
 * Write a function called "listAllValues" which returns an array of all the input object's values. (객체를 입력으로 받고 해당 객체의 값들을 배열로 반환하는 "listAllValues" 함수를 작성하세요.)

Example input:

{
  name : 'Krysten',
  age : 33,
  hasPets : false
}
Function's return value (output):

['Krysten', 33, false];
Note that the input may have a different number of keys and values than the given sample. (입력으로 받을 객체의 키-값 수는 예시에서 보여준 키-값의 수와 다를 수 있다는 점에 유의하세요.)

E.g. it should also handle an input like:

{
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
}
Function's return value (output):

['a', 11, true, 1];
 */








function listAllValues(obj) {
    let result = [];
  
    for (let key in obj) {
      result.push(obj[key]);
    }
  
    return result;
  }