/**
 * printObject 함수를 작성하세요
객체를 파라미터로 받는 printObject 함수는 객체 안에 정의된 키와 값 쌍을 조합한 문자열을 리턴합니다. 문자열은 한 줄에 하나의 키/값 쌍을 콜론(:) 및 공백문자와 함께 표시하며, 또다른 키/값 쌍 사이에는 줄바꿈 문자가 포함되어 있습니다.

노트:

줄바꿈 문자는 \n로 표현됩니다. hello\nworld 의 출력은 다음과 같습니다
hello
world
객체를 탐색하는 반복문은 for ... in 구문을 이용합니다
for ... in 구문은 MDN을 이용해 검색해보세요.
let obj = { name: 'Steve', age: 13, sex: 'Male' };
let output = printObject(obj);
console.log(output);
다음과 같은 내용이 콘솔에 출력됩니다.

name: Steve
age: 13
sex: Male
 
콜론 사이에 공백을 주의하세요.
문자열에 맨 마지막에 줄바꿈을 포함합니다. (위 콘솔 출력을 줄바꿈 문자로 표시하면 다음과 같습니다.)
name: Steve\nage: 13\nsex: Male\n
 */























function printObject(obj) {
    let result = '';
    for(let key in obj) {
      result = result + key + ': ' + obj[key] + '\n';
    }
    return result;
  }