/**
 * Write a function called "convertObjectToList" which converts an object literal into an array of arrays, like this: (객체를 입력으로 받고 해당 객체를 다음과 같이 2차원 배열로 변형 할 수 있는 함수 "convertObjectToList"를 작성하세요.)

Argument:

{
name: 'Holly',
age: 35,
role: 'producer'
}
Return value:

[['name', 'Holly'], ['age', 35], ['role', 'producer']];
Note that your function should be able to handle ANY object like this, not just the exact sample provided above. (여러분이 작성하신 함수는 위에 제시된 예시 뿐만 아니라 어떠한 객체도 다룰 수 있어야 합니다.)
 */









function convertObjectToList(obj) {
    let result = [];
  
    for (let key in obj) {
      result.push([key, obj[key]]);
    }
  
    return result;
  }