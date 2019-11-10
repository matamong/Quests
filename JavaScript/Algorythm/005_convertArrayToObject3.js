/**
 * Write a function called "transformEmployeeData" that transforms some employee data from one format to another. (사원들의 정보를 다른 형태로 변형 할 수 있는 함수 "transformEmployeeData" 함수를 작성하세요.)

The argument will look something like this: (사원들의 정보는 아래와 같은 배열로 주어질 수 있습니다.)

[
  [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
  [
    ['firstName', 'Mary'],
    ['lastName', 'Jenkins'],
    ['age', 36],
    ['role', 'manager']
  ]
];
Given that input, the return value should look like this: (위의 배열이 input으로 주어진다면, 다음과 같은 output을 리턴해야합니다.)

[
  { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
  { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }
];
Note that the input may have a different number of rows or different keys than the given sample. (입력값에는 예시와 다른 키값들이 있을 수도 있고 사원수가 다를 수도 있습니다.)

For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that. (예를들어, 인사팀에서 "tshirtSize"를 각 사원들의 정보에 넣었다면, 여러분의 코드는 해당 사항을 유연히 대처 할 수 있어야 합니다.)
 */

















function transformEmployeeData(array) {
    let result = [];
  
    for (let i = 0; i < array.length; i++) {
      let employeeObject = {};
      for (let j = 0; j < array[i].length; j++) {
        let key = array[i][j][0];
        employeeObject[key] = array[i][j][1];
      }
      result.push(employeeObject);
    }
  
    return result;
  }
  
  let array = [
    [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
    [
      ['firstName', 'Mary'],
      ['lastName', 'Jenkins'],
      ['age', 36],
      ['role', 'manager']
    ]
  ];
  
  let output = transformEmployeeData(array);
  console.log(output);