/**
 * Write a function called "getAllButLastElementOfProperty". ("getAllButLastElementOfProperty" 함수를 작성하세요.)

Given an object and a key, "getAllButLastElementOfProperty" returns an array containing all but the last element of the array located at the given key. (객체와 키가 주어졌을때, "getAllButLastElementOfProperty" 함수는 주어진 키에 위치하는 배열의 마지막 요소를 제외한 배열을 반환합니다.)

Notes:

If the array is empty, it should return an empty array. (만약 배열이 비어있다면, 빈 배열을 반환해야 합니다.)
If the property at the given key is not an array, it should return an empty array. (만약 주어진 키에 위치하는 속성값이 배열이 아니라면, 빈 배열을 반환해야 합니다.)
If there is no property at the key, it should return an empty array. (만약 주어진 객체에 주어진 키가 없다면, 빈 배열을 반환해야 합니다.)
let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]
 */





























function getAllButLastElementOfProperty(obj, key) {
    let prop = obj[key];
    if (!Array.isArray(prop)) {
      return [];
    }
    return prop.slice(0, -1);
  }