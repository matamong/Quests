/*
Write a function 'transformFirstAndLast' that takes in an array, and returns an object with: (배열을 입력으로 받고 다음 조건에 만족하는 객체를 반환하는 함수 'transformFirstAndLast' 함수를 작성하세요.)

the first element of the array as the object's key, and (1. 배열의 첫번째 요소를 객체의 키로 가집니다.)
the last element of the array as that key's value. (2. 배열의 마지막 요소를 해당 키의 값으로 가집니다.)
Example input: (input의 예시입니다.)

['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
Function's return value (output): (예상하는 output 값입니다.)

{
  Queen: 'Beyonce';
}
Do not change the input array. Assume all elements in the input array will be of type 'string'. (입력으로 받는 배열은 수정하지 마세요. 입력으로 받는 배열의 요소들은 모두 문자열 타입입니다.)

Note that the input array may have a varying number of elements. Your code should flexibly accommodate that. (입력으로 받는 배열의 크기는 다양 할 수 있다는 점을 유의하세요. 여러분의 코드는 해당 사항을 유연히 대처 할 수 있어야 합니다.)

E.g. it should handle input like:

['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'];
Function's return value (output):

{
  Kevin: 'Spacey';
}

*/





//

function transformFirstAndLast(array) {
    let result = {};
    result[array[0]] = array[array.length - 1];
    return result;
  }