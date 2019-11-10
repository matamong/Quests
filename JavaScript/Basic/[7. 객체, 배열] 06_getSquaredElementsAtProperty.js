/**
 * "getSquaredElementsAtProperty" 함수를 작성하세요.
객체와 키가 주어졌을때, "getSquaredElementsAtProperty" 함수는 주어진 키에 위치하는 배열의 요소들의 제곱을 요소로 가지는 배열을 반환합니다.

Notes:

만약 배열이 비어있다면, 빈 배열을 반환해야 합니다.
만약 주어진 키에 위치하는 속성값이 배열이 아니라면, 빈 배열을 반환해야 합니다.
만약 주어진 객체에 주어진 키가 없다면, 빈 배열을 반환해야 합니다.
let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
Hint:

배열의 map 메소드를 이용해보세요.
 */





























function square(number) {
    return number * number;
  }
  
  function getSquaredElementsAtProperty(obj, key) {
    let arrayProperty = obj[key];
  
    if(Array.isArray(arrayProperty) === false) {
      return [];
    }
  
    return arrayProperty.map(square);
  }