/**
 * Write a function called "getNthElementOfProperty". ("getNthElementOfProperty" 함수를 작성하세요.)

Given an object and a key, "getNthElementOfProperty" returns the nth element of an array located at the given key. (객체와 키가 주어졌을때, "getNthElementOfProperty" 함수는 주어진 키에 위차한 배열의 n번째 요소를 반환합니다.)

Notes:

If the array is empty, it should return undefined. (만약 배열이 비어있다면, undefined를 반환해야 합니다.)
If n is out of range, it should return undefined. (만약 n 이 범위를 벗어난다면, undefined를 반환해야 합니다.)
If the property at the given key is not an array, it should return undefined. (만약 주어진 키에 위치하는 속성값이 배열이 아니라면, undefined를 반환해야 합니다.)
If there is no property at the key, it should return undefined. (만약 주어진 키에 위치하는 속성이 없다면, undefined를 반환해야 합니다.)
let obj = {
  key: [1, 2, 6]
};
let output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2
 */



























function getNthElementOfProperty(obj, key, n) {
    if (!Array.isArray(obj[key])) {
      return undefined
    }
    return obj[key][n]
  }