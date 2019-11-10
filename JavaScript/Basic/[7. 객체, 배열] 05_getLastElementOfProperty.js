/**
 * Write a function called "getLastElementOfProperty". ("getLastElementOfProperty" 함수를 작성하세요.)

Given an object and a key, "getLastElementOfProperty" returns the last element of an array located at the given key. (객체와 키가 주어졌을때, "getLastElementOfProperty" 함수는 주어진 키에 위치한 배열의 마지막 요소를 반환합니다.)

Notes:

If the array is empty, it should return undefined. (만약 배열이 비어있다면, undefined를 반환해야 합니다.)
If the property at the given key is not an array, it should return undefined. (만약 주어진 키에 해당하는 속성값이 배열이 아니라면, undefined를 반환해야 합니다.)
If there is no property at the key, it should return undefined. (만약 주어진 키에 속성값이 없다면, undefined를 반환해야 합니다.)
let obj = {
  key: [1, 2, 5]
};
let output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5
 */




























function getLastElementOfProperty(obj, key) {
    let prop = obj[key];
    if (!Array.isArray(prop)) {
      return undefined
    }
  
    return prop[prop.length - 1]
  }